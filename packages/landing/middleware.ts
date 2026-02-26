import {
  clerkMiddleware,
  clerkClient,
  createRouteMatcher,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

/**
 * Portal access is invite-only.
 *
 * How it works:
 * 1. User signs in via Clerk (anyone can sign in).
 * 2. After sign-in, middleware checks if their email is in the allowlist.
 * 3. If not in the list, they get redirected back to the landing page.
 *
 * To invite a user:
 *   Add their email to the ALLOWED_EMAILS environment variable in Vercel.
 *   Format: comma-separated, e.g. "ana@empresa.com,carlos@empresa.com"
 */
const isProtectedRoute = createRouteMatcher(["/portal(.*)"]);
const isSignInRoute = createRouteMatcher(["/portal/sign-in(.*)"]);

/** Parse the allowlist from the environment variable. */
function getAllowedEmails(): Set<string> {
  const raw = process.env.ALLOWED_EMAILS ?? "";
  return new Set(
    raw
      .split(",")
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean),
  );
}

export default clerkMiddleware(async (auth, req) => {
  // Public routes — let them through
  if (!isProtectedRoute(req) || isSignInRoute(req)) {
    return;
  }

  // Must be signed in
  const { userId } = await auth.protect();

  // Check allowlist — if empty, nobody gets in (safe default)
  const allowed = getAllowedEmails();
  if (allowed.size === 0) {
    // No allowlist configured — block everyone from portal
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Fetch user email from Clerk
  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const userEmails = user.emailAddresses.map((e) =>
    e.emailAddress.toLowerCase(),
  );

  const isAllowed = userEmails.some((email) => allowed.has(email));
  if (!isAllowed) {
    // User is signed in but not in the allowlist — redirect to landing
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

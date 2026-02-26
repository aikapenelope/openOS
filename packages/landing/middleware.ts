import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

/**
 * Portal access is invite-only via Clerk publicMetadata.
 *
 * How it works:
 * 1. User signs in via Clerk (anyone can create an account).
 * 2. Middleware reads `portalAccess` from the session token claims.
 * 3. If `portalAccess` is not `true`, the user is redirected to "/".
 *
 * Setup (one-time, per Clerk application — does NOT affect other projects):
 *   Clerk Dashboard > Sessions > Customize session token > add:
 *   { "metadata": "{{user.public_metadata}}" }
 *
 * To grant access to a user:
 *   Clerk Dashboard > Users > select user > Public metadata > set:
 *   { "portalAccess": true }
 */
const isProtectedRoute = createRouteMatcher(["/portal(.*)"]);
const isSignInRoute = createRouteMatcher(["/portal/sign-in(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // Public routes — let them through
  if (!isProtectedRoute(req) || isSignInRoute(req)) {
    return;
  }

  // Must be signed in
  const { sessionClaims } = await auth.protect();

  // Check portalAccess flag from publicMetadata (via session token)
  const hasAccess = sessionClaims?.metadata?.portalAccess === true;

  if (!hasAccess) {
    // Signed in but not authorized — redirect to landing
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

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

/**
 * Portal access is restricted to invited users only.
 *
 * How it works:
 * 1. Enable "Restricted" mode in Clerk Dashboard > Restrictions
 *    — this blocks sign-ups unless the user has an invitation link.
 * 2. This middleware protects all /portal/* routes (except sign-in).
 * 3. Only users you explicitly invite via Clerk Dashboard can register.
 *
 * To invite a user:
 *   Clerk Dashboard > Users > Invite user > enter their email
 */
const isProtectedRoute = createRouteMatcher(["/portal(.*)"]);
const isSignInRoute = createRouteMatcher(["/portal/sign-in(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req) && !isSignInRoute(req)) {
    await auth.protect();
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

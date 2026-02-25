import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

/**
 * Routes under /portal/* require authentication.
 * The sign-in page itself is public so Clerk can render it.
 * Everything else (landing, API routes, etc.) is public.
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

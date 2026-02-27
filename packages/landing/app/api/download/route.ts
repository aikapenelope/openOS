import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

/**
 * Protected download endpoint.
 *
 * Verifies the user has an active Clerk session before redirecting to the
 * DMG on GitHub Releases. Unauthenticated requests receive a 401.
 *
 * The actual file stays on GitHub Releases — this route only gates access
 * behind Clerk authentication so the direct link isn't exposed in the UI.
 */

const DMG_URL =
  "https://github.com/aikapenelope/openOS/releases/download/v0.11.121/openwork-desktop-darwin-aarch64.dmg";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "Debes iniciar sesión para descargar AikaOS." },
      { status: 401 },
    );
  }

  return NextResponse.redirect(DMG_URL);
}

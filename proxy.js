import { NextResponse } from "next/server";

export function proxy(request) {
  const host =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    "";

  const hostname = host.split(":")[0].toLowerCase();

  if (hostname === "hawksberginternational.com") {
    const url = request.nextUrl.clone();

    url.protocol = "https:";
    url.hostname = "www.hawksberginternational.com";

    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
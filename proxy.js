import { NextResponse } from "next/server";

export function proxy(request) {
  const hostname = request.headers.get("host")?.split(":")[0];

  if (hostname === "hawksberginternational.com") {
    const url = request.nextUrl.clone();

    url.protocol = "https:";
    url.hostname = "www.hawksberginternational.com";

    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
"use client";
import { NextResponse } from "next/server";
import { useAuth } from "./context/authContext";

export function middleware(request) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/blog-panel",
};

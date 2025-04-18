import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { theme } = await req.json();

    const res = NextResponse.json({ success: true });
    res.cookies.set("theme", theme, {
        path: "/",
    });

    return res;
}

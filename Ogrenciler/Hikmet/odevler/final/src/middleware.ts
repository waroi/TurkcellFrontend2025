import { routing } from "@/i18n/routing";
import { updateSession } from "@/utils/supabase/middleware";
import createMiddleware from "next-intl/middleware";
import { type NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
	let response = await updateSession(request);

	const intlResponse = intlMiddleware(request);

	response.cookies.getAll().forEach((cookie) => {
		intlResponse.cookies.set(cookie.name, cookie.value, {
			domain: cookie.domain,
			expires: cookie.expires,
			httpOnly: cookie.httpOnly,
			maxAge: cookie.maxAge,
			path: cookie.path,
			sameSite: cookie.sameSite,
			secure: cookie.secure,
		});
	});

	return intlResponse;
}

export const config = {
	matcher: [
		"/((?!api|trpc|_next|_vercel|_next/static|_next/image|favicon.ico|.*\\..*).*)",
	],
};

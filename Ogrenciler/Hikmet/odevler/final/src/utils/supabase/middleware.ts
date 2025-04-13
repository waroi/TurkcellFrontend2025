import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
	let supabaseResponse = NextResponse.next({
		request,
	});

	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return request.cookies.getAll();
				},
				setAll(cookiesToSet) {
					cookiesToSet.forEach(({ name, value, options }) =>
						request.cookies.set(name, value)
					);
					supabaseResponse = NextResponse.next({
						request,
					});
					cookiesToSet.forEach(({ name, value, options }) =>
						supabaseResponse.cookies.set(name, value, options)
					);
				},
			},
		}
	);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	// Eğer kullanıcı yoksa ve /login ya da /register sayfasında değilse, yönlendir
	if (
		!user &&
		!request.nextUrl.pathname.includes("/login") &&
		!request.nextUrl.pathname.includes("/register")
	) {
		const url = request.nextUrl.clone();

		// Locale'i belirle
		const locale = url.pathname.split("/")[1];
		const supportedLocales = ["en", "tr"];
		const currentLocale = supportedLocales.includes(locale) ? locale : "en";

		// Login sayfasına yönlendir (i18n uyumlu)
		url.pathname = currentLocale === "tr" ? "/tr/giris" : "/en/login";
		return NextResponse.redirect(url);
	}

	return supabaseResponse;
}

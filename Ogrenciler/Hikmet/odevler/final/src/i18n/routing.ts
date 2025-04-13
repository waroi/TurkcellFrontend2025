import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: ["en", "tr"],

	// Used when no locale matches
	defaultLocale: "en",
	pathnames: {
		"/": "/",
		// "/login": {
		// 	en: "/login",
		// 	tr: "/giris",
		// },
		"/register": {
			en: "/register",
			tr: "/kayit",
		},
	},
});
export const { Link, redirect, usePathname, useRouter, getPathname } =
	createNavigation(routing);

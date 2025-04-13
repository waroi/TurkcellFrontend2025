import { usePathname, useRouter } from "next/navigation";
import { useLocalizationStore } from "../store/changeLocalizationStore";

export const useLocalization = () => {
	const router = useRouter();
	const pathname = usePathname();
	const { locale, setLocale } = useLocalizationStore();

	const toggleLanguage = () => {
		const newLocale = locale === "en" ? "tr" : "en";

		setLocale(newLocale);

		if (pathname.startsWith(`/${locale}`)) {
			router.push(pathname.replace(`/${locale}`, `/${newLocale}`));
		} else {
			router.push(`/${newLocale}${pathname}`);
		}
	};

	return {
		locale,
		toggleLanguage,
	};
};

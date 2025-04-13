import { create } from "zustand";

interface LocalizationState {
	locale: string;
	setLocale: (locale: string) => void;
}

export const useLocalizationStore = create<LocalizationState>()((set) => ({
	locale: "en",
	setLocale: (locale) => set({ locale }),
}));

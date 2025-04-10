import { derived, writable } from "svelte/store";

interface ApiData {
	conversion_rates?: Record<string, number>;
	base_code?: string;
	time_last_update_utc?: string;
	time_next_update_utc?: string;
}

export const apiData = writable<ApiData>({});

export const currencyRates = derived(apiData, ($apiData) => {
	if ($apiData.conversion_rates) {
		return Object.entries($apiData.conversion_rates).map(
			([currency, rate]) => ({
				currency,
				rate,
			})
		);
	}
	return [];
});

import { useFavoriteStore } from "@/store/favoritesStore";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export async function toggleFavoriteCoin(coinId: string) {
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) return { error: "not-authenticated" };

	const { favorites, addFavorite, removeFavorite } =
		useFavoriteStore.getState();

	const { data: existing } = await supabase
		.from("favorites")
		.select("id")
		.eq("user_id", user.id)
		.eq("coin_id", coinId)
		.single();

	if (existing) {
		await supabase.from("favorites").delete().eq("id", existing.id);
		removeFavorite(coinId);
		return { status: "removed" };
	} else {
		await supabase.from("favorites").insert({
			user_id: user.id,
			coin_id: coinId,
		});
		addFavorite(coinId);
		return { status: "added" };
	}
}

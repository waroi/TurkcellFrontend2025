import { redirect } from "next/navigation";

import Profile from "@/components/profile/Profile";
import { createClient } from "@/utils/supabase/server";

export default async function ProfileView() {
	const supabase = await createClient();

	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect("/login");
	}

	return <Profile user={data?.user} />;
}

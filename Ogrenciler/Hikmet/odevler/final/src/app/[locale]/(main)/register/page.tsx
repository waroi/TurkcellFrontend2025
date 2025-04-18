import Register from "@/components/auth/register/Register";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function RegisterView() {
	const supabase = await createClient();
	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (session) {
		redirect("/profile");
	}
	return <Register />;
}

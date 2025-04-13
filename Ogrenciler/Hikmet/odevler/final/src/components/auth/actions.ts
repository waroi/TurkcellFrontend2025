"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface LoginData {
	email: string;
	password: string;
}

interface SignupData {
	email: string;
	password: string;
	nickName: string;
	phone: string;
	country?: string;
	uidCode?: string;
}

export async function login(data: LoginData) {
	const supabase = await createClient();

	const { error } = await supabase.auth.signInWithPassword({
		email: data.email,
		password: data.password,
	});

	if (error) {
		console.error("Login error:", error.message);
		redirect("/error");
	}

	revalidatePath("/", "layout");
	redirect("/");
}

export async function signup(data: SignupData) {
	const supabase = await createClient();

	// Kullanıcı hesabı oluştur
	const { data: authData, error: authError } = await supabase.auth.signUp({
		email: data.email,
		password: data.password,
		options: {
			data: {
				nickname: data.nickName,
				country: data.country || "",
				phone: data.phone,
				uid_code: data.uidCode || "",
			},
		},
	});

	if (authError) {
		console.error("Registration error:", authError.message);
		redirect("/error");
	}

	console.log("User created:", authData?.user);

	// Kullanıcı oluşturulduğunda profil bilgilerini kaydet
	if (authData?.user) {
		// Profiles tablosuna ekleme yapmak için
		const { data: profileData, error: profileError } = await supabase
			.from("profiles")
			.insert([
				{
					id: authData.user.id, // user_id yerine Supabase'de id kullanmak daha yaygındır
					nickname: data.nickName,
					country: data.country || "",
					phone: data.phone,
					uid_code: data.uidCode || "",
					updated_at: new Date().toISOString(),
				},
			])
			.select();

		if (profileError) {
			// Detaylı hata bilgisi
			console.error("Profile creation error details:", {
				message: profileError.message,
				details: profileError.details,
				hint: profileError.hint,
				code: profileError.code,
			});
		} else {
			console.log("Profile created successfully:", profileData);
		}
	}

	revalidatePath("/", "layout");
	redirect("/");
}

export async function logout() {
	const supabase = await createClient();
	await supabase.auth.signOut();
	revalidatePath("/", "layout");
	redirect("/login");
}

"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { type LoginFormData, type RegisterFormData } from "@/lib/definitions";

type ActionResult = Promise<{ error: string } | null>;

export async function login(data: LoginFormData): ActionResult {
	const supabase = await createClient();

	const { error } = await supabase.auth.signInWithPassword({
		email: data.email,
		password: data.password,
	});

	if (error) {
		console.error("Login error:", error.message);
		if (error.message.includes("Invalid login credentials")) {
			return { error: "Invalid email or password." };
		}
		return { error: error.message || "Login failed. Please try again." };
	}

	revalidatePath("/", "layout");
	redirect("/");
}

export async function signup(data: RegisterFormData): ActionResult {
	const supabase = await createClient();

	const { data: authData, error: authError } = await supabase.auth.signUp({
		email: data.email,
		password: data.password,
		options: {
			data: {
				nickname: data.nickName,
				country: data.country || "",
				phone: data.phone,
			},
		},
	});

	if (authError) {
		console.error("Registration error:", authError.message);
		if (authError.message.includes("User already registered")) {
			return { error: "This email address is already registered." };
		}
		if (authError.message.includes("Password should be at least")) {
			return { error: "Password does not meet the minimum requirements." };
		}
		return {
			error: authError.message || "Registration failed. Please try again.",
		};
	}

	if (!authData?.user) {
		console.error("Signup succeeded but user data is missing.");
		return {
			error:
				"Registration completed, but failed to retrieve user data. Please try logging in.",
		};
	}

	console.log("User created:", authData.user.id);

	revalidatePath("/", "layout");
	redirect("/");
}

export async function logout() {
	const supabase = await createClient();
	await supabase.auth.signOut();
	revalidatePath("/", "layout");
	redirect("/login");
}

"use server";

import { type ChangePasswordFormData } from "@/lib/definitions";
import { createClient } from "@/utils/supabase/server";

export async function changeUserPassword(
	data: Pick<ChangePasswordFormData, "newPassword">
) {
	try {
		const supabase = await createClient();

		const { error } = await supabase.auth.updateUser({
			password: data.newPassword,
		});

		if (error) {
			console.error("Supabase password update error:", error.message);

			if (
				error.message.includes(
					"New password should be different from the old password"
				)
			) {
				throw new Error("New password cannot be the same as the old password.");
			}
			if (error.message.includes("Password should be at least")) {
				throw new Error("Password does not meet the minimum requirements.");
			}

			throw new Error(error.message || "Failed to update password.");
		}

		console.log("Password updated successfully.");
		return { success: true, message: "Password updated successfully." };
	} catch (error: any) {
		console.error("Error in changeUserPassword action:", error);
		return {
			success: false,
			message:
				error.message ||
				"An unexpected error occurred while changing the password.",
		};
	}
}

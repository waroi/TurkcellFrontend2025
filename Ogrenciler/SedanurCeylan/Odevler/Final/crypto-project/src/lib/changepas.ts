import { getAuth, updatePassword } from "firebase/auth";

export const changePassword = async (newPassword: string) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) throw new Error("Kullanıcı giriş yapmamış");

    try {
        await updatePassword(user, newPassword);
        console.log("Şifre başarıyla değiştirildi.");
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Şifre değiştirme hatası:", error.message);
            throw error;
        } else {
            console.error("Bilinmeyen bir hata oluştu.");
            throw new Error("Bilinmeyen hata");
        }
    }
};

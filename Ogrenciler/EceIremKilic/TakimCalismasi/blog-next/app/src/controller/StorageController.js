import { storage } from "@/firebase_config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadProfileImage = async (file) => {
    try {
        const fileRef = ref(storage, `profile_images/${file.name}`);
        await uploadBytes(fileRef, file);
        return await getDownloadURL(fileRef);
    } catch (error) {
        console.error("Error in uploadProfileImage: ", error);
    }
};
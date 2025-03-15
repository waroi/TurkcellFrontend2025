import { auth, db, storage } from "@/firebase_config";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadProfileImage = async (file) => {
    try {
        const fileRef = ref(storage, `profile_images/${file.name}`);
        await uploadBytes(fileRef, file);
        const downloadURL = await getDownloadURL(fileRef);
        if (downloadURL !== null) {
            const currentUser = auth.currentUser.uid;
            const docRef = doc(db,"users",currentUser);
            await updateDoc(
                docRef, {
                    profileUrl :  downloadURL
                }
            );
        return downloadURL;
        }
    } catch (error) {
        console.error("Error in uploadProfileImage: ", error);
    }
};
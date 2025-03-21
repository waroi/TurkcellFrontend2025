import { auth } from "../../firebase_config";
import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	setDoc,
	where,
} from "firebase/firestore";
import { db } from "../../firebase_config";
import { sendEmailVerification,sendPasswordResetEmail } from "firebase/auth";

export const readUser = async (userID) => {
	try {
		const userRef = doc(db, "users", userID);
		const userSnap = await getDoc(userRef);
		if (userSnap.exists()) {
			return userSnap.data();
		} else {
			console.log("DBController readUser error!");
			return null;
		}
	} catch (error) {
		console.error("DBController readUser error!:", error);
		return null;
	}
};
export const saveUser = async (user) => {
	try {
		const userRef = doc(db, "users", user.uid);
		await setDoc(userRef, user);
		console.log("DBController saveUser error!:", user);
		return user;
	} catch (error) {
		console.error("DBController saveUser error!:", error.message);
		return null;
	}
};

export const sendEmail = async () => {
	await sendEmailVerification(auth.currentUser);
}

export const sendPasswordReset = async () => {
	await sendPasswordResetEmail(auth,auth.currentUser.email)
}
export const checkIsHeAdmin = async () => {
	try {
		const q = query(collection(db, "users"), where("isAdmin", "==", true));
		const snaps = await getDocs(q);
		const currentID = auth.currentUser.uid;
		for (const doc of snaps.docs) {
			if (doc.id === currentID) {
				return doc.data().isAdmin;
			}
		}
	} catch (error) {
		console.log("checkIsHeAdmin DBController Error", error);
		return null;
	}
};

import { initializeApp } from "firebase/app";

import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
} from "firebase/auth";

import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { redirect } from "next/navigation";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export async function register(formData) {
	const data = {
		email: formData.get("email"),
		password: formData.get("password"),
	};
	const user = await createUserWithEmailAndPassword(
		auth,
		data.email,
		data.password
	);
	setDoc(doc(collection(db, "users"), user.user.uid), { blogs: [] });
	redirect("/");
}

export async function login(formData) {
	const data = {
		email: formData.get("email"),
		password: formData.get("password"),
	};

	try {
		const credentials = await signInWithEmailAndPassword(
			auth,
			data.email,
			data.password
		);
		localStorage.setItem("user", credentials.user.uid);
	} catch (err) {
		console.log(err);
		return { error: err.message };
	}

	redirect("/");
}

export function getCurrentUser() {
	return auth.currentUser;
}
export async function logout() {
	localStorage.removeItem("user");
	return auth.signOut();
}

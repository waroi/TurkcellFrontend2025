"use server";

// Next
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/utils/firebaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = response.user;
    if (!user) {
      return { message: "Kullanıcı bulunamadı veya şifre hatalı" };
    }
    console.log("user is in");
  } catch (error) {
    return { message: "Beklenmedik bir hata oluştu" };
  }
  redirect("/");
}

export async function register(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    if (!user) {
      return { message: "kullanıcı oluşturulamadı" };
    }
  } catch (error) {
    // toast.error(error.message);
    return {
      message:
        "Beklenmedik bir hata oluştu veya kullanıcı zaten mevcut.Şifre en az 6 hane olmalı",
    };
  }
  //   revalidatePath("/", "layout"); // cache ile alakalı, eğer cache yapsaydık burayı yani tagleri güncellememiz gerekiyormuş.
  redirect("/login");
}

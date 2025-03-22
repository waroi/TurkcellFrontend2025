import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const registerUser = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Kullanıcı kaydedildi:", userCredential.user);
  } catch (error) {
    console.error("Hata:", error.message);
    throw error;
  }
};

export const SignIn = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    alert("Başarıyla giriş yaptınız yönlendiriliyorsunuz...");
    console.log("Kullanıcı giriş yaptı:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    alert("Kullanıcı adı veya şifreniz hatalı !");
    console.error("Hata:", error.message);
    throw error;
  }
};

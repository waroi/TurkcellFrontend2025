"use client";
import { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { useRouter } from "next/navigation";

export default function UserPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div>
      <h2>Kullanıcı Sayfası</h2>
      {user ? (
        <div>
          <p>Hoşgeldin, {user.email}</p>
          <button onClick={handleLogout}>Çıkış Yap</button>
        </div>
      ) : (
        <p>Yükleniyor...</p>
      )}
    </div>
  );
}

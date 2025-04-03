
"use client";

import { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Image from "next/image";

export default function UserPage() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data());
        }
      }
    });
    return () => unsubscribe();
  }, [db]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Kullanıcı Sayfası</h2>
      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          {user.photoURL && (
            <Image
              src={user.photoURL}
              alt="Profil Fotoğrafı"
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4"
            />
          )}
          <p className="text-lg font-semibold text-center">{user.displayName || "İsimsiz Kullanıcı"}</p>
          <p className="text-gray-600 text-center">{user.email}</p>
          <hr className="my-4" />
          {userData && (
            <div>
              <p className="text-gray-800"><strong>Adres:</strong> {userData.address || "Adres eklenmemiş"}</p>
              <p className="text-gray-800"><strong>Telefon:</strong> {userData.phone || "Telefon eklenmemiş"}</p>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Çıkış Yap
          </button>
        </div>
      ) : (
        <p>Yükleniyor...</p>
      )}
    </div>
  );
}


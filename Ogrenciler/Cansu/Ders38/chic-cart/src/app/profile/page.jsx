"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "@/store/authStore"; 

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/login");
        return;
      }

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUser(docSnap.data()); 
      } else {
        console.log("Kullanıcı verisi bulunamadı.");
      }
      setLoading(false); 
    });

    return () => unsubscribe(); 
  }, [router, setUser]);

  if (loading) {
    return <p className="text-center mt-5">Yükleniyor...</p>;
  }

  if (!user) {
    return <p>Kullanıcı bilgileri bulunamadı.</p>;
  }

  return (
    <div className="container mt-5">
      <h1>Profil</h1>
      <p>Hoş geldin, {user.name}!</p>
      <div className="profile-content">
        <img
          src={user.profilePic || "/default-profile.jpg"}
          alt="Profile"
          className="img-fluid rounded-circle"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <h3>Rol: {user.role}</h3>
        <p>E-posta: {user.email}</p>
      </div>
    </div>
  );
};

export default Profile;

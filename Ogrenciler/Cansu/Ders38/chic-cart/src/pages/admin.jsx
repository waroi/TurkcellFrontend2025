"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import { db } from "@/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const AdminPanel = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {

      const fetchUser = async () => {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUser(userDoc.data());
        }
      };
      fetchUser();
    }
  }, []);

  useEffect(() => {
    if (user && user.role !== "admin") {
    
      router.push("/profile");
    }
  }, [user, router]);

  if (!user) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Burada yalnızca adminler işlem yapabilir.</p>
    </div>
  );
};

export default AdminPanel;


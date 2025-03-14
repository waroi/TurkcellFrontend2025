"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import {signOut, onAuthStateChanged} from "firebase/auth";
import {doc, getDoc} from "firebase/firestore";
import {auth, db} from "@/api/firebaseAuth";

const UserLogin = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        return;
      }

      const userRef = doc(db, "users", currentUser.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUser(userSnap.data());
      }
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Çıkış yaparken hata oluştu:", error);
    }
  };

  return (
    <div className="ms-5 d-flex">
      {user ? (
        <>
          <div className="dropdown">
            <button
              className="btn btn-dark dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Hoşgeldin, {user.publisher}
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link
                  href="/userBlogs"
                  className="dropdown-item bg-dark w-100 rounded-0 text-white text-center"
                >
                  Bloklarım
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="dropdown-item bg-dark w-100 rounded-0 text-white text-center"
                >
                  Çıkış Yap <i className="bi bi-box-arrow-in-right"></i>
                </button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <Link href="/sign/signIn" className="btn btn-dark">
          Giriş Yap <i className="bi bi-box-arrow-in-right"></i>
        </Link>
      )}
    </div>
  );
};

export default UserLogin;

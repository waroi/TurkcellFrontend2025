"use client";
import { useEffect, useState } from "react";
import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
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
    <div className="home-container">
  
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
     
            <Image src="/logo.jpg" alt="Veyla" width={80} height={40} />
          </a>
          <div>
            {user ? (
              <>
                <span className="text-light me-3">{user.email}</span>
                <button className="btn btn-outline-danger" onClick={handleLogout}>
                  Çıkış Yap
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-outline-primary me-2" onClick={() => router.push("/login")}>
                  Giriş Yap
                </button>
                <button className="btn btn-success" onClick={() => router.push("/register")}>
                  Kayıt Ol
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Alışverişin Yeni Adresi: <span className="text-primary">Veyla</span></h1>
          <p className="lead">Binlerce ürünü en uygun fiyatlarla keşfet!</p>
          <button 
            className="btn btn-lg btn-warning" 
            onClick={() => router.push("/products")}
          >
            Ürünleri Keşfet
          </button>
        </div>
      </div>
    </div>
  );
}


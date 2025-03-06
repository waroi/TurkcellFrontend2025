import { createUser } from "../firebase/authService";
import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ad, setAd] = useState("");
    const [soyad, setSoyad] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
          const user = await createUser(email, password);
          if (!user) {
            throw new Error("Kullanıcı oluşturulamadı!");
          }
          
          console.log("Yeni Kullanıcı UID:", user.uid);
      
          // Firestore'da kullanıcı belgesini oluştur
          const userRef = doc(db, "users", user.uid);
          await setDoc(userRef, {
            ad,
            soyad,
            email,
            role: "admin",
            createdAt: new Date(),
          });
      
          console.log("Kullanıcı Firestore'a kaydedildi!");
        } catch (error) {
          console.error("Kayıt işlemi başarısız:", error.code, error.message);
        }
      };

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Ad</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={ad}
                        onChange={(e) => setAd(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="surname" className="form-label">Soyad</label>
                    <input
                        type="text"
                        className="form-control"
                        id="surname"
                        value={soyad}
                        onChange={(e) => setSoyad(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};

export default SignUp;

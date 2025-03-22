import { createContext, useState, useEffect, useContext } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import {
  addAdmin,
  addCandidate,
  getAdmin,
  getCandidate,
} from "../utils/services";

const AuthContext = createContext(null);
//TODO:: burda tutulan user bilgisi json-server dan gelmeli , şuan firebaseden geliyor.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Firebase'den gelen kullanıcı bilgisiyle kendi API'nizden kullanıcı bilgilerini çek
        let userData;
        userData = await getCandidate(currentUser.uid); // Önce candidate olarak ara
        if (!userData) {
          userData = await getAdmin(currentUser.uid); // Candidate bulunamazsa admin olarak ara
        }
        if (userData) {
          setUser(userData); // Kullanıcı bilgilerini ayarla
        } else {
          setUser(null); // Kullanıcı bulunamazsa user'ı null yap
        }
      } else {
        setUser(null); // Firebase'de oturum yoksa user'ı null yap
      }
      setLoading(false); // Yükleme durumunu false yap
    });

    return unsubscribe; // Dinleyiciyi temizle
  }, []);

  const login = async (email, password, id, isAdmin) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (!userCredential.user) {
        throw new error("user bulunamadı");
      }
      const user = isAdmin ? await getAdmin(id) : await getCandidate(id);
      setUser(user);
      return user;
    } catch (error) {
      console.error("Login error:", error.message);
      throw new Error("Giriş yapılamadı. Lütfen bilgilerinizi kontrol edin.");
    }
  };

  const register = async (email, password, firstName, lastName, role) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (!userCredential.user) {
        throw new Error("User oluşturulamadı");
      }
      const userDetail = {
        firstName,
        lastName,
        role,
        email,
        id: userCredential.user.uid,
      };
      let user;
      if (role === "admin") {
        user = await addAdmin(userDetail);
      } else {
        user = await addCandidate(userDetail);
      }
      console.log(user);
      if (!user) {
        throw new Error("user database e kaydedilemedi");
      }
      return user;
    } catch (error) {
      console.error("Register error:", error.message);
      throw new Error("Kayıt işlemi başarısız. Lütfen tekrar deneyin.");
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

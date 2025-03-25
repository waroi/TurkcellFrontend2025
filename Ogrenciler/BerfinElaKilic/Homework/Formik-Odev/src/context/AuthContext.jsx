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
import { useNavigate } from "react-router";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setLoading(false);
      return;
    }

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userData =
          (await getCandidate(currentUser.uid)) ||
          (await getAdmin(currentUser.uid));
        if (userData) {
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const login = async (email, password, role) => {
    console.log("logining");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (!userCredential.user) {
        throw new error("user bulunamadı");
      }
      const id = userCredential.user.uid;
      const isAdmin = role === "admin";
      const userFromDatabase = isAdmin
        ? await getAdmin(id)
        : await getCandidate(id);
      setUser(userFromDatabase);
      localStorage.setItem("user", JSON.stringify(userFromDatabase));
      return userFromDatabase;
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
    try {
      await signOut(auth);
    } catch (error) {
      console.log("çıkış yapılamadı", error);
      return;
    } finally {
      setUser(null);
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, setUser }}>
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

import { useEffect } from "react";
import { useNavigate } from "react-router";

import {
  register as registerFirebase,
  login as loginFirebase,
  logout as logoutFirebase,
  getUser,
} from "../services/firebase";

import useStore from "../store/useStore";

export default function () {
  const navigation = useNavigate();
  const { setUser, addToast } = useStore();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) setUser(user);
  }, []);

  function register({ email, password, name, surname }) {
    registerFirebase(email, password, name, surname)
      .then((id, data) => {
        data = {
          id,
          email,
          name,
          surname,
          isAdmin: false,
        };

        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        navigation("/application");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            addToast("Bu e-posta adresi zaten kullanımda.", "danger");
            break;
          default:
            addToast("Bir hata oluştu, lütfen tekrar deneyiniz.", "danger");
            break;
        }
      });
  }

  function login({ email, password }) {
    loginFirebase(email, password)
      .then((user) => {
        getUser(user).then((user) => {
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          navigation("/application");
        });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-credential":
            addToast("E-posta adresi veya şifre yanlış.", "danger");
            break;
          default:
            addToast("Bir hata oluştu, lütfen tekrar deneyiniz.", "danger");
            break;
        }
      });
  }

  function logout() {
    logoutFirebase().then(() => {
      localStorage.removeItem("user");
      setUser(null);
      navigation("/");
    });
  }

  return {
    register,
    login,
    logout,
  };
}

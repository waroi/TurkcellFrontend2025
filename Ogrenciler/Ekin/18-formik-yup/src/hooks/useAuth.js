import { useEffect } from "react";
import {
  register as registerFb,
  login as loginFb,
  logout as logoutFb,
} from "../services/firebase";
import { getUser, setUser as setUserFb } from "../services/firebase";
import { useNavigate } from "react-router";
import useUserStore from "../store/useUserStore";

export default function () {
  const navigation = useNavigate();
  const { setUser } = useUserStore();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) setUser(user);
  }, []);

  function register(form) {
    console.log("user", form);
    registerFb(form.email, form.password, form.name, form.surname).then(
      (id) => {
        setUserFb(id, form.email, form.name, form.surname);
        //localStorage.setItem("user", JSON.stringify(data));
        navigation("/application");
      }
    );
  }

  function login(form) {
    loginFb(form.email, form.password).then((user) => {
      console.log("loginuser", user);

      getUser(user).then((user) => {
        localStorage.setItem("user", JSON.stringify(user));
      });

      navigation("/application");
    });
  }

  function logout(form) {
    logoutFb().then((user) => {
      setUserFb(null);
      localStorage.removeItem("user");
      navigation("/");
    });
  }

  return {
    register,
    login,
    logout,
  };
}

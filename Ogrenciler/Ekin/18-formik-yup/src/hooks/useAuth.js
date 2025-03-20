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
        const data = {
          id,
          email: form.email,
          name: form.name,
          surname: form.surname,
          isAdmin: false,
        };
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        navigation("/application");
      }
    );
  }

  function login(form) {
    loginFb(form.email, form.password).then((user) => {
      console.log("loginuser", user);

      getUser(user).then((user) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      });

      navigation("/application");
    });
  }

  function logout() {
    console.log("click");

    logoutFb().then(() => {
      setUser(null);
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

import { register as registerFb, login as loginFb } from "../services/firebase";
import useUserStore from "../store/useUserStore";
import { useNavigate } from "react-router";

export default function () {
  const { setUser } = useUserStore();
  const navigation = useNavigate();

  function register(form) {
    registerFb(form.email, form.password, form.name, form.surname).then(
      (user) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        navigation("/application");
      }
    );
  }

  function login(email, password) {
    console.log("123", email, password);

    loginFb(email, password).then((user) => {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      navigation("/application");
    });
  }

  return {
    register,
    login,
  };
}

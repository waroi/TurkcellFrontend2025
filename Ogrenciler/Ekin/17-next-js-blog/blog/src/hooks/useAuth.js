import { useEffect } from "react";

import useStore from "@/store/blogs";
import {
  register as registerFirebase,
  login as loginFirebase,
  logout as logoutFirebase,
  getUser,
  setUser as setUserFirebase,
} from "@/services/firebase";
import { useRouter } from "next/navigation";
import convertBase64 from "@/util/convertBase64";

export default function () {
  const router = useRouter();
  const store = useStore();

  useEffect((user) => {
    user = JSON.parse(localStorage.getItem("user"));

    if (user) store.setUser(user);
  }, []);

  function register(email, password, name, profile) {
    convertBase64(profile).then((profile) => {
      registerFirebase(email, password, name, profile).then((user) => {
        getUser(user).then((user) => {
          store.setUser(user);
          localStorage.setItem("user", JSON.stringify(user));
          router.push("/");
        });
      });
    });
  }

  function login(email, password) {
    loginFirebase(email, password).then((user) => {
      getUser(user).then((user) => {
        store.setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/");
      });
    });
  }

  function logout() {
    if (confirm("Are you sure you want to logout?")) {
      logoutFirebase().then(() => {
        store.setUser(null);
        delete localStorage.user;
        router.push("/");
      });
    }
  }

  async function setUser(name, profile, user) {
    user = {
      id: store.user.id,
      name: name ? name : store.user.name,
      profile: profile ? await convertBase64(profile) : store.user.profile,
    };

    setUserFirebase(user.id, user.name, user.profile).then(() => {
      store.setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/");
    });
  }

  return {
    user: store.user,
    register,
    login,
    logout,
    setUser,
  };
}

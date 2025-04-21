"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { useRef } from "react";
import imageLogin from "@/images/login.png";
import imageLogin2 from "@/images/login2.png";
import { login as loginFirebase } from "@/services/firebase";
//* Import images due to desperate measures.
import useCryptoStore from "@/store/cryptoStore";
import { useRouter } from "next/navigation";

export default function Login() {
  const cryptoStore = useCryptoStore();
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function login() {
    if (!emailRef.current?.value || !passwordRef.current?.value) {
      alert("Please fill in all the fields.");
      return;
    }

    loginFirebase(emailRef.current.value, passwordRef.current.value)
      .then((user) => {
        localStorage.setItem("user", JSON.stringify(user));
        cryptoStore.set({ user });
        router.push("/user");
      })
      .catch(() => alert("Something went wrong, please try again."));
  }

  return (
    <main>
      <Breadcrumb title="Login" />
      <Container className="bg-white dark-black py-5">
        <div className="row">
          <div className="d-none d-lg-block col-3"></div>
          <div className="col-12 col-lg-6">
            <h2 className="text-center mb-3 mt-5">Login To Rockie</h2>
            <p className="text-center mb-4">
              Welcome back! Log In now to start trading
            </p>
            <div className="center mb-4">
              <Image src={imageLogin} alt="Login" width={369} height={100} />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="form-label fs-5 text-secondary fw-semibold"
              >
                Email/ID
              </label>
              <input
                ref={emailRef}
                type="text"
                className="form-control"
                id="email"
                placeholder="Please fill in the email form."
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="form-label fs-5 text-secondary fw-semibold"
              >
                Password
              </label>
              <input
                ref={passwordRef}
                type="password"
                className="form-control mb-2 py-2"
                id="password"
                placeholder="Please enter a password."
              />
            </div>
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="remember"
              />
              <label
                className="form-check-label w-100 d-flex justify-content-between"
                htmlFor="remember"
              >
                Remember Me
                <span className="text-danger">Forgot Password?</span>
              </label>
            </div>
            <Button className="w-100" onClick={login}>
              Login
            </Button>
            <div className="center py-4 mb-5">
              <span>
                Not A Member?{" "}
                <Link
                  href="/register"
                  className="text-decoration-none fw-semibold"
                >
                  Register
                </Link>
              </span>
            </div>
          </div>
          <div className="d-none d-lg-block col-3">
            <div className="h-100 center ps-5">
              <Image src={imageLogin2} alt="Login" width={281} height={288} />
            </div>
          </div>
        </div>
      </Container>
      <Marquee />
    </main>
  );
}

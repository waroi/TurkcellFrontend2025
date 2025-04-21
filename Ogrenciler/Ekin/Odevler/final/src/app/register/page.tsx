"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { register as registerFirebase } from "@/services/firebase";
import imageRegister from "@/images/register.png";
//* Import images due to desperate measures.
import { useRef } from "react";
import useCryptoStore from "@/store/cryptoStore";
import { useRouter } from "next/navigation";

export default function Register() {
  const cryptoStore = useCryptoStore();
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const password2Ref = useRef<HTMLInputElement>(null);
  const nickRef = useRef<HTMLInputElement>(null);

  function register() {
    if (
      !emailRef.current?.value ||
      !passwordRef.current?.value ||
      !password2Ref.current?.value ||
      !nickRef.current?.value
    ) {
      alert("Please fill in all the fields.");
      return;
    }
    if (passwordRef.current!.value != password2Ref.current!.value) {
      alert("Password do not match.");
      return;
    }
    if (passwordRef.current!.value.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    registerFirebase(
      emailRef.current.value,
      passwordRef.current.value,
      nickRef.current.value
    ).then((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      cryptoStore.set({ user });
      router.push("/user");
    });
  }

  return (
    <main>
      <Breadcrumb title="Register" />
      <Container className="bg-white dark-black py-5">
        <div className="row">
          <div className="d-none d-lg-block col-3"></div>
          <div className="col-12 col-lg-6">
            <h2 className="text-center mb-3 mt-5">Register To Rockie</h2>
            <p className="text-center mb-4">
              Register in advance and enjoy the event benefits.
            </p>
            <div className="center mb-4">
              <Image
                src={imageRegister}
                alt="Register"
                width={187}
                height={32}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="form-label fs-5 text-secondary fw-semibold"
              >
                Email/ID
              </label>
              <div className="input-group">
                <input
                  ref={emailRef}
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Please fill in the email form."
                />
                <button className="btn btn-primary text-white" type="button">
                  Authenticate
                </button>
              </div>
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
              <input
                ref={password2Ref}
                type="password"
                className="form-control py-2"
                id="password2"
                placeholder="Please re-enter a password."
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="nick"
                className="form-label fs-5 text-secondary fw-semibold"
              >
                NickName
              </label>
              <input
                ref={nickRef}
                type="text"
                className="form-control mb-2 py-2"
                id="nick"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="country"
                className="form-label fs-5 text-secondary fw-semibold"
              >
                Country
              </label>
              <select
                id="country"
                className="form-select py-2"
                aria-label="Country"
                defaultValue="0"
              >
                <option value="0">Turkey (+90)</option>
                <option value="1">Galactic Federation (+👽☎)</option>
                <option value="1">Other</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="uid"
                className="form-label fs-5 text-secondary fw-semibold"
              >
                UID Code
              </label>
              <input
                type="text"
                className="form-control mb-2 py-2"
                id="uid"
                placeholder="Please enter your invitation code."
                disabled
              />
            </div>
            <Button className="w-100" onClick={register}>
              Pre-Registration
            </Button>
            <div className="center py-4 mb-5">
              <span>
                Already Have An Account?{" "}
                <Link
                  href="/login"
                  className="text-decoration-none fw-semibold"
                >
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </Container>
      <Marquee />
    </main>
  );
}

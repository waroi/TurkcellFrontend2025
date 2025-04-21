"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import Button from "@/components/Button";
import UserButton from "@/components/UserButton";
import Breadcrumb from "@/components/Breadcrumb";
import { useRouter } from "next/navigation";

import imageUser from "@/images/user.png";
import imageUser2 from "@/images/user2.png";
import imageUser3 from "@/images/user3.png";
import imageUser4 from "@/images/user4.png";
import imageUserInf from "@/images/userinf.png";

import { useState, useRef, useEffect } from "react";
import { changePassword as changePasswordFirebase } from "@/services/firebase";
import useCryptoStore from "@/store/cryptoStore";

export default function User() {
  const router = useRouter();
  const cryptoStore = useCryptoStore();

  useEffect(() => {
    if (!cryptoStore.user && !localStorage.getItem("user")) {
      router.push("/");
    }
  }),
    [];

  const passwordRef = useRef<HTMLInputElement>(null);
  const password2Ref = useRef<HTMLInputElement>(null);

  const [phase, setPhase] = useState(0);

  function changePassword() {
    if (!passwordRef.current?.value || !password2Ref.current?.value) {
      alert("Please fill in all the fields.");
      return;
    }
    if (passwordRef.current.value != password2Ref.current.value) {
      alert("Passwords are not the same.");
      return;
    }

    changePasswordFirebase(passwordRef.current.value)
      .then(() => alert("Password changed successfully."))
      .catch(() => alert("Something went wrong, please try again."));
  }

  if (cryptoStore.user)
    return (
      <main>
        <Breadcrumb title="User" />
        <Container className="bg-white dark-black py-5">
          <div className="row py-5">
            <div className="col-3 pe-5">
              <div>
                <UserButton logic={phase == 0} onClick={() => setPhase(0)}>
                  <i className="fa-solid fa-user me-2" aria-hidden="true"></i>
                  User Profile
                </UserButton>
                <UserButton logic={phase == 1} onClick={() => setPhase(1)}>
                  <i
                    className="fa-solid fa-share-nodes me-2"
                    aria-hidden="true"
                  ></i>
                  Referrals
                </UserButton>
                <UserButton logic={phase == 2} onClick={() => setPhase(2)}>
                  <i className="fa-solid fa-code me-2" aria-hidden="true"></i>
                  API keys
                </UserButton>
                <UserButton logic={phase == 3} onClick={() => setPhase(3)}>
                  <i
                    className="fa-solid fa-clock-rotate-left me-2"
                    aria-hidden="true"
                  ></i>
                  Login history
                </UserButton>
                <UserButton logic={phase == 4} onClick={() => setPhase(4)}>
                  <i
                    className="fa-solid fa-barcode me-2"
                    aria-hidden="true"
                  ></i>
                  2FA
                </UserButton>
                <UserButton logic={phase == 5} onClick={() => setPhase(5)}>
                  <i className="fa-solid fa-lock me-2" aria-hidden="true"></i>
                  Change password
                </UserButton>
              </div>
            </div>
            <div className="col-9 border-start border-terniary border-2 px-5">
              <div className="ps-5">
                <div className={`pb-3 mb-5 progress-${phase}`}>
                  <div className="phase-0">
                    <h2 className="mb-4" style={{ fontSize: "2rem" }}>
                      User Profile
                    </h2>
                    <h3 className="mb-3">Information</h3>
                    <div className="row g-5 mb-4">
                      <div className="col-12 col-md-6">
                        <div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            defaultValue={
                              localStorage.getItem("userinf-name") || ""
                            }
                            onChange={(event) =>
                              localStorage.setItem(
                                "userinf-name",
                                event.target.value
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Surname"
                            defaultValue={
                              localStorage.getItem("userinf-surname") || ""
                            }
                            onChange={(event) =>
                              localStorage.setItem(
                                "userinf-surname",
                                event.target.value
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row g-5 mb-4">
                      <div className="col-12 col-md-6">
                        <div>
                          <input
                            type="email"
                            className="form-control"
                            value={localStorage.getItem("unsafeemail") || ""}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Phone Number"
                            defaultValue={
                              localStorage.getItem("userinf-phone") || ""
                            }
                            onChange={(event) =>
                              localStorage.setItem(
                                "userinf-phone",
                                event.target.value
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row g-5 mb-4">
                      <div className="col-12 col-md-6">
                        <div>
                          <select
                            id="country"
                            className="form-select py-2"
                            aria-label="Country"
                            defaultValue="0"
                          >
                            <option value="0">Turkish</option>
                            <option value="1">Galactic Federationist</option>
                            <option value="1">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="row">
                          <div className="col-6">
                            <select
                              id="gender"
                              className="form-select py-2"
                              aria-label="gender"
                              defaultValue="0"
                            >
                              <option value="0">Male</option>
                              <option value="1">Female</option>
                            </select>
                          </div>
                          <div className="col-6">
                            <input
                              type="date"
                              className="form-control"
                              defaultValue={
                                localStorage.getItem("userinf-date") || ""
                              }
                              onChange={(event) =>
                                localStorage.setItem(
                                  "userinf-date",
                                  event.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Image
                      src={imageUserInf}
                      alt="Features"
                      width={890}
                      height={231}
                    />
                    <Button
                      className="mt-4 py-2"
                      onClick={() => alert("Profile updated successfully.")}
                    >
                      Update Profile
                    </Button>
                  </div>
                  <div className="phase-1">
                    <Image
                      src={imageUser}
                      alt="Referrals"
                      width={700}
                      height={440}
                    />
                  </div>
                  <div className="phase-2">
                    <Image
                      src={imageUser2}
                      alt="API keys"
                      width={700}
                      height={464}
                    />
                  </div>
                  <div className="phase-3">
                    <Image
                      src={imageUser3}
                      alt="Login history"
                      width={989}
                      height={990}
                    />
                  </div>
                  <div className="phase-4">
                    <Image
                      src={imageUser4}
                      alt="2FA"
                      width={700}
                      height={444}
                    />
                  </div>
                  <div className="phase-5">
                    <h2 className="mb-4" style={{ fontSize: "2rem" }}>
                      Change Password
                    </h2>
                    <h3 className="mb-3">New Password</h3>
                    <div className="row g-5 mb-3">
                      <div className="col-12 col-md-6">
                        <div>
                          <label
                            htmlFor="old_password"
                            className="form-label text-secondary"
                          >
                            Old Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="old_password"
                            placeholder="Old Password"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div>
                          <label
                            htmlFor="2fa"
                            className="form-label text-secondary"
                          >
                            2FA Code
                          </label>
                          <input
                            disabled
                            type="password"
                            className="form-control"
                            id="2fa"
                            placeholder="2FA Code"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row g-5 mb-4">
                      <div className="col-12 col-md-6">
                        <div>
                          <label
                            htmlFor="password"
                            className="form-label text-secondary"
                          >
                            New Password
                          </label>
                          <input
                            ref={passwordRef}
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="New Password"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div>
                          <label
                            htmlFor="password2"
                            className="form-label text-secondary"
                          >
                            Confirm Password
                          </label>
                          <input
                            ref={password2Ref}
                            type="password"
                            className="form-control"
                            id="password2"
                            placeholder="Confirm Password"
                          />
                        </div>
                      </div>
                    </div>
                    <Button className="py-2" onClick={changePassword}>
                      Change Password
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Marquee />
      </main>
    );
  else
    return (
      <main className="center">
        <i
          className="fa-solid fa-circle-notch fa-spin fs-2 text-secondary"
          aria-hidden="true"
        ></i>
      </main>
    );
}

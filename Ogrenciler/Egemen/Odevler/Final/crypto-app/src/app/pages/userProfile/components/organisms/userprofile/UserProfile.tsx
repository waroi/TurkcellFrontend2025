"use client";
import React, { useEffect, useState } from "react";
import "./userprofile.scss";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../../../firebase/firebase";
import { getAuth, updatePassword } from "firebase/auth";

type UserProfileProps = {
  uid: string;
};

const UserProfile = ({ uid }: UserProfileProps) => {
  const [profile, setProfile] = useState({
    nickname: "",
    email: "",
    country: "",
    phone: "",
    password: "",
    uid: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!uid) return;
      try {
        const docRef = doc(db, "crypto-users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setProfile({
            nickname: data?.nickname || "",
            email: data?.email || "",
            country: data?.country || "",
            phone: data?.phone || "",
            password: data?.password || "",
            uid: data?.uid || "",
          });
        }
      } catch (err: any) {
        setError("Failed to fetch profile.");
      }
      setLoading(false);
    };
    fetchProfile();
  }, [uid]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (!uid) return;
    try {
      const docRef = doc(db, "crypto-users", uid);
      await updateDoc(docRef, {
        nickname: profile.nickname,
        email: profile.email,
        country: profile.country,
        phone: profile.phone,
        password: profile.password,
        uid: uid,
      });

      const auth = getAuth();
      const user = auth.currentUser;
      if (user && profile.password) {
        try {
          await updatePassword(user, profile.password);
        } catch (err: any) {
          setError("Password update failed: " + (err.message || ""));
          return;
        }
      }

      alert("Profile updated!");
    } catch (err: any) {
      setError("Profile update failed: " + (err.message || ""));
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="profile-wrapper">
      <div className="row">
        <div className="col col-md-4 ">
          <div className="avatar mx-2">
            <div className="profile-img"></div>
            <p className="profile-nickname">{profile.nickname}</p>
            <p className="profile-mail">{profile.email}</p>
          </div>
          <div className="menu d-flex flex-column ">
            <div className="options d-flex ">
              <button className="btn btn-primary rounded-pill w-50">
                User Profile
              </button>
            </div>
            <div className="options f-flex ">
              <img src="/assets/header/referrals.svg" alt="refferals" />
              <button className="btn btn-white mx-2 fw-bold">Referrals</button>
            </div>
            <div className="options f-flex ">
              <img src="/assets/header/apikeys.svg" alt="apikeys" />
              <button className="btn btn-white mx-2 fw-bold">API keys</button>
            </div>
            <div className="options f-flex ">
              <img src="/assets/header/loginhistory.svg" alt="history" />
              <button className="btn btn-white mx-2 fw-bold">
                Login history
              </button>
            </div>
            <div className="options f-flex ">
              <img src="/assets/header/2fa.svg" alt="2fa" />
              <button className="btn btn-white mx-2 fw-bold">2FA</button>
            </div>
            <div className="options f-flex ">
              <img src="/assets/header/password.svg" alt="password" />
              <button className="btn btn-white mx-2 fw-bold">
                Change password
              </button>
            </div>
          </div>
        </div>
        <div className="col col-md-8">
          <div className="profile-heading">
            <p className="user-header">User Profile</p>
            <p className="user-subheader">Information</p>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <form
            className="row g-3 needs-validation"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="col-md-6">
              <label htmlFor="nickname" className="form-label">
                Nickname
              </label>
              <input
                type="text"
                className="form-control"
                id="nickname"
                value={profile.nickname}
                onChange={handleChange}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={profile.email}
                onChange={handleChange}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                id="country"
                value={profile.country}
                onChange={handleChange}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={profile.phone}
                onChange={handleChange}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="password"
                value={profile.password}
                onChange={handleChange}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary rounded-pill" type="submit">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

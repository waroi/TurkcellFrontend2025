"use client";
import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../../utils/firebaseConfig";
import { login, register } from "../actions";
import { useActionState } from "react";

const initialState = {
  message: "",
};

const Register = () => {
  const [state, formAction, pending] = useActionState(register, initialState);
  console.log(state?.message);

  return (
    <div className="auth">
      <h2>Kayıt Ol</h2>
      <form action={formAction} className="input-div">
        <input name="email" type="text" placeholder="Email adres" required />
        <input name="password" type="password" placeholder="Şifre" required />
        <p className="text-warning" aria-live="polite">
          {state?.message}
        </p>
        <div>
          <button disabled={pending} type="submit" className="button-div">
            Kayıt ol
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

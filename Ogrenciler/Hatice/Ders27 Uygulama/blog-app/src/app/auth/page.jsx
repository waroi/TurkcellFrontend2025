"use client";
import React, { useState } from 'react'
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { auth } from '../../firebaseConfig';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const login = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      if(user){
        toast.success("Giriş başarılı 🎉");
        router.push("/");
      }
    } catch (error) {
      toast.error("Giriş Yapılamadı")
    }
  }

  const register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const user = response.user
      if (user) {
        toast.success("Kullanıcı oluşturuldu");
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className='auth'>
      <h3>Giriş Yap / Kaydol</h3>
      <div className='input-div'>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email adres' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Şifre' />
      </div>
      <div>
        <button onClick={login} className='button-div'>Giriş Yap</button>
        <button onClick={register} className='button-div'>Kaydol</button>
      </div>
    </div>
  )
}

export default Auth;
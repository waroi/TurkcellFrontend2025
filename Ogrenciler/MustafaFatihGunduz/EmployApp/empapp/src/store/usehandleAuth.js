import { useState } from "react";
import {
  signWithEmailAndPassword,
  createWithEmailAndPassword,
} from "../services/auth_service"

const useHandleAuth = () => {

  const handleLogin = async (email,password) => {
    const user = await signWithEmailAndPassword(email, password);
    if (user !== null) {
      alert("Başarılı bir şekilde giriş yaptınız.");
      // handleClose();
    } else {
      alert("Giriş yaparken bir hata oluştu");
    }
  };
  const handleSignUp = async (email,password) => {
    const user = await createWithEmailAndPassword(email, password);
    if (user !== null) {
      alert("Başarılı bir şekilde kayıt oldunuz.");
    } else {
      alert("Kayıt yaparken bir hata oluştu");
    }
  };
    
  

  
  return {handleLogin,handleSignUp};
}

export default useHandleAuth
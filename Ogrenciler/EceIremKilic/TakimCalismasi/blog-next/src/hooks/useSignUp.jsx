import { useState } from "react";
import useAuthStore from "@/store/useAuthStore";

const useSignUpForm = ({ router }) => {
  const { signup } = useAuthStore();
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    password: "",
    rePassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const dbUser = await signup(
        formData.email,
        formData.password,
        formData.fullName
      );
      if (dbUser) {
        router.push("/");
      } else {
      }
    } catch (err) {
      console.log("Error in useSignUp", err);
    }
  };

  return { formData, handleChange, handleSignUp };
};

export default useSignUpForm;

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../../../context/authContext";
import FormInput from "../../../component/atoms/FormInput";
import { useFormInput } from "../../../hooks/useFormInput"; 
import FormButton from '../../../component/atoms/FormButon';
import FormHeader from '../../../component/atoms/FormHeader';

export default function SignInForm() {
  const { loginUser } = useAuth();
  const router = useRouter();
  const { formData, handleChange, setFormData } = useFormInput(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }
    loginUser(formData.email, formData.password);
    setFormData({ email: "", password: "" });
    router.push("/");
  };

  return (
    <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
      <FormHeader text="Giriş Yap" />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label color-grey">Email</label>
          <FormInput type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label color-grey">Şifre</label>
          <div className="input-group">
            <FormInput type="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
        </div>
        <FormButton text="Giriş Yap" />
      </form>
      <p className="text-center mt-3 color-grey">
        Hesabın yok mu? <Link href="/signup" className="color-orange">Kayıt Ol</Link>
      </p>
    </div>
  );
}

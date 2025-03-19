import FormInput from "@/app/login/atoms/FormInput";
import SignButton from "@/app/login/components/SignButton";
import TextButton from "@/app/login/components/TextButton";
import { useRouter } from "next/navigation";
import useSignUpForm from "@/hooks/useSignUp";

const SignUpForm = () => {
  const router = useRouter();
  const { formData, handleChange, handleSignUp } = useSignUpForm({ router });
  return (
    <form onSubmit={handleSignUp}>
      <FormInput
        id="signUpFullName"
        label="Ad - Soyad"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Ad-Soyad"
      />
      <FormInput
        id="signInEmail"
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="E-mail"
      />
      <FormInput
        type="password"
        id="signUpPassword"
        label="Şifre"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Şifre"
      />
      <FormInput
        type="password"
        id="signUpRePassword"
        label="Şifre Tekrarı"
        name="rePassword"
        value={formData.rePassword}
        onChange={handleChange}
        placeholder="Şifre tekrar"
      />

      <SignButton title="Kayıt Ol" />
      <TextButton route="/login" title="Zaten hesabınız var mı? Oturum açın" />
    </form>
  );
};

export default SignUpForm;

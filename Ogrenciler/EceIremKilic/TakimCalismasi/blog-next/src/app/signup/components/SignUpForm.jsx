import FormInput from "@/app/login/atoms/FormInput";
import SignButton from "@/app/login/components/SignButton";
import TextButton from "@/app/login/components/TextButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/useAuthStore";

const SignUpForm = () => {
  const Router = useRouter();
  const { signup } = useAuthStore();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const handleSignUp = async (e) => {
    e.preventDefault();
    const dbUser = await signup(email, password, fullName);
    if (dbUser !== null) {
      console.log("Giriş Başarılı", dbUser);
      Router.push("/");
    } else {
      console.log("Giriş Başarısız");
    }
  };
  return (
    <form onSubmit={handleSignUp}>
      <FormInput
        id={"signUpFullName"}
        label={"Ad - Soyad"}
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Ad-Soyad"
      />
      <FormInput
        id={"signInEmail"}
        label={"Email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
      />
      <FormInput
        type="password"
        id={"signUpPassword"}
        label={"Şifre"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Şifre"
      />
      <FormInput
        type="password"
        id={"signUpRePassword"}
        label={"Şifre Tekrarı"}
        value={rePassword}
        onChange={(e) => setRePassword(e.target.value)}
        placeholder="Şifre tekrar"
      />
      <SignButton title={"Kayıt Ol"} />
      <TextButton
        route={"/login"}
        title={"Zaten hesabınız var mı? Oturum açın"}
      />
    </form>
  );
};

export default SignUpForm;

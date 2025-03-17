import { useState } from "react";
import FormInput from "../atoms/FormInput";
import SocialButtons from "./SocialButtons";
import TextButton from "./TextButton";
import SignButton from "./SignButton";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/useAuthStore";

const SignInForm = () => {
  const router = useRouter();
  const { login } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginIn = async (e) => {
    e.preventDefault();
    const dbUser = await login(email, password);
    if (dbUser !== null) {
      console.log("Giriş Başarılı", dbUser);
      router.push("/");
    } else {
      console.log("Giriş Başarısız");
    }
  };
  return (
    <form onSubmit={handleLoginIn}>
      <FormInput
        id={"signInEmail"}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="E-mail"
        placeholder="E-mailinizi giriniz."
      />

      <FormInput
        type="password"
        id={"signInPassword"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Şifre"
        placeholder="Şifrenizi giriniz."
      />
      <SignButton title={"Giriş Yap"} />
      <TextButton route={"/signup"} title={"Hesabınız yok mu? Oluşturun."} />
      <SocialButtons />
    </form>
  );
};

export default SignInForm;

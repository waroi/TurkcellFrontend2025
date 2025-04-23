"use client";
import Image from "next/image";
import Input from "@/components/Input/Input";
import AuthContainer from "@/components/components/AuthContainer";
import Button from "@/components/components/Button";
import useCustomFormik from "@/hooks/useCustomFormik";
import { loginSchema } from "@/schema/loginSchema";
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuthStore();
  const { translations } = useLanguage();
  const { values, handleChange, handleSubmit, errors, resetForm } =
    useCustomFormik({
      validationSchema: loginSchema,
      onSubmit: async (value) => {
        try {
          const user = await login(values.email, values.password);
          if (user !== null) {
            resetForm();
            alert("Başarılı bir şekilde giriş yapıldı");
            router.push("/home");
          }
        } catch (error) {
          console.log("OnSubmit Error", error);
        }
      },
    });
  return (
    <>
      <AuthContainer authType="Login" />
      <div className="d-flex bg-white ">
        <section className="loginForm py-21 mx-auto">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="fs-1 text-dark fw-bold">
              {translations.loginToTwonance}
            </h1>
            <h4 className="fs-4 text-secondary fw-normal">
              {translations.welcomeBack}
            </h4>
            <div className="secureDiv d-flex me-0 rounded-pill">
              <div className="circleLogo rounded-circle bg-success opacity-75 px-2 py-2 d-flex align-items-center justify-content-center z-1">
                <Image
                  src="/assets/secure.svg"
                  width={20}
                  height={20}
                  alt="secure"
                />
              </div>
              <p className="text-dark fs-6 fw-normal px-19 py-99">
                <span className="text-success fs-6  fw-normal">https://</span>
                accounts.twonance.com/login
              </p>
            </div>
          </div>
          <div className="tabs d-flex align-items-center justify-content-center py-17 ">
            <button className="btn btn-primary rounded-pill text-white fs-6 fw-normal px-97 py-98">
              Email
            </button>
            <button className="btn rounded-pill text-secondary fs-6 fw-normal px-97 py-98">
              {translations.mobile}
            </button>
          </div>
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <Input
              type="email"
              id="email"
              label="Email/ID"
              placeholder={translations.pleaseEnterEmail}
              value={values.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              id="password"
              label="Password"
              placeholder={translations.pleaseEnterPassword}
              value={values.password}
              onChange={handleChange}
            />
            <div className="d-flex align-items-center justify-content-between">
              <div className="rememberMe">
                <input type="checkbox" name="remember" id="remember" />
                <span className="fw-normal fs-6 text-dark px-98">
                  {translations.rememberMe}
                </span>
              </div>
              <button className="btn text-danger fw-normal fs-6">
                {translations.forgotPassword}
              </button>
            </div>
            <Button label="Login" padding="py-22" type="submit" />
            <div className="d-flex mt-97 align-items-center justify-content-center">
              <p className="fs-6 fw-normal text-dark mx-99">
                {translations.notAMember}
              </p>
              <p className="text-primary fw-bold fs-6">
                {translations.register}
              </p>
            </div>
          </form>
        </section>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <Image src="/assets/qr.svg" width={180} height={180} alt="QR" />
          <h4 className="text-dark fs-4 fw-bold">
            {translations.loginWithQr}{" "}
          </h4>
          <p className="text-secondary fs-6 fw-normal">
            {translations.scanThisCode}
            <span className="text-primary fs-6 fw-normal">
              Twonance mobile app
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

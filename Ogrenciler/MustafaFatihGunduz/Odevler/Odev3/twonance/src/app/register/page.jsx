"use client";
import React from "react";
import { useRouter } from "next/navigation";
import AuthContainer from "../../components/components/AuthContainer";
import Input from "../../components/Input/Input";
import Button from "@/components/components/Button";
import useCustomFormik from "@/hooks/useCustomFormik";
import { registerSchema } from "@/schema/registerSchema";
import useAuthStore from "@/store/useAuthStore";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
const RegisterPage = () => {
  const router = useRouter();
  const { signup } = useAuthStore();
  const { translations } = useLanguage();
  const { values, handleChange, handleSubmit, errors, resetForm } =
    useCustomFormik({
      validationSchema: registerSchema,
      onSubmit: async (value) => {
        try {
          const user = await handleFormSubmit({
            ...values,
            email: values.email.trim(),
          });
          if (user !== null) {
            resetForm();
            alert("Başarılı bir şekilde kayıt yapıldı");
            router.push("/home");
          }
        } catch (error) {
          console.log("OnSubmit Error", error);
        }
      },
    });
  const handleFormSubmit = async (data) => {
    await signup(
      data.email,
      data.password,
      data.nickName,
      data.phone,
      data.uidCode
    );
  };
  return (
    <main>
      <AuthContainer authType="Register" />
      <section className="loginForm py-21 mx-auto">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h1 className="fs-1 text-dark fw-bold">
            {translations.registerToRockie}
          </h1>
          <h4 className="fs-4 text-secondary fw-normal">
            {translations.registerBenefits}{" "}
          </h4>
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
            isRegister={true}
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />
          <div className="d-flex flex-column">
            <Input
              type="password"
              id="password"
              label={translations.password}
              placeholder={translations.pleaseEnterPassword}
              isRegisterPassword={true}
              value={values.password}
              onChange={handleChange}
              error={errors.password}
            />
            <input
              type="password"
              name="rePassword"
              id="rePassword"
              placeholder={translations.pleaseReEnterPassword}
              className="fs-5 text-secondary fw-normal mt-98 px-16 py-95 w-100"
              value={values.rePassword}
              onChange={handleChange}
              error={errors.rePassword}
            />
          </div>
          <Input
            type="text"
            id="nickName"
            label={translations.nickName}
            placeholder={translations.pleaseEnterNickName}
            value={values.nickName}
            onChange={handleChange}
            error={errors.nickName}
          />
          <Input
            type="number"
            id="phone"
            label={translations.phone}
            placeholder="ex= 01012345678 (without '-')"
            value={values.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          <Input
            type="text"
            id="uidCode"
            label={translations.uidCode}
            placeholder={translations.pleaseEnterUidCode}
            value={values.uidCode}
            onChange={handleChange}
            error={errors.uidCode}
          />
          <Button
            label={translations.preRegistration}
            padding="py-22"
            type="submit"
          />
          <div className="d-flex mt-97 align-items-center justify-content-center">
            <p className="fs-6 fw-normal text-dark mx-99">
              {translations.alreadyHaveAnAccount}
            </p>
            <Link href={"/login"}>
              <p className="text-primary fw-bold fs-6">{translations.login}</p>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default RegisterPage;

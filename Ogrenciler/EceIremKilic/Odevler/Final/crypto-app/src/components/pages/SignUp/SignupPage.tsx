"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { auth } from "../../../../firebase_config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpPage = () => {
  const t = useTranslations();
  const [showPassword, setShowPassword] = useState(false);
  const [registrationError, setRegistrationError] = useState("");

  const registerForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      nickname: "",
      country: "South Korea (+82)",
      phone: "",
      uidCode: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t("register.validation.email"))
        .required(t("register.validation.required")),
      password: Yup.string()
        .min(8, t("register.validation.passLength"))
        .required(t("register.validation.required")),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], t("register.validation.passMatch"))
        .required(t("register.validation.required")),
      nickname: Yup.string().matches(
        /^[a-zA-Z0-9]+$/,
        t("register.validation.noSpecialChars")
      ),
      phone: Yup.string().required(t("register.validation.required")),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;
        console.log("Kullanıcı Kaydedildi:", user);
        resetForm();
      } catch (error) {
        if (error instanceof Error) {
          setRegistrationError(error.message);
        } else {
          setRegistrationError("Bilinmeyen bir hata oluştu.");
        }
        console.error("Kayıt Hatası:", error);
      }
    },
  });

  return (
    <Container className="py-5">
      <h2 className="text-center">{t("register.title")}</h2>
      <p className="text-center text-secondary">{t("register.subtitle")}</p>

      <Form
        onSubmit={registerForm.handleSubmit}
        className="mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <Form.Group className="mb-3">
          <Form.Label>{t("register.email")}</Form.Label>
          <Form.Control
            name="email"
            value={registerForm.values.email}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
            isInvalid={
              !!registerForm.errors.email && registerForm.touched.email
            }
            placeholder={t("register.placeholders.email")}
          />
          <Form.Control.Feedback type="invalid">
            {registerForm.errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>{t("register.password")}</Form.Label>
          <Form.Control
            type={showPassword ? "text" : "password"}
            name="password"
            value={registerForm.values.password}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
            isInvalid={
              !!registerForm.errors.password && registerForm.touched.password
            }
            placeholder={t("register.placeholders.password")}
          />
          <Form.Control.Feedback type="invalid">
            {registerForm.errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>{t("register.confirmPassword")}</Form.Label>
          <Form.Control
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={registerForm.values.confirmPassword}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
            isInvalid={
              !!registerForm.errors.confirmPassword &&
              registerForm.touched.confirmPassword
            }
            placeholder={t("register.placeholders.confirmPassword")}
          />
          <Form.Control.Feedback type="invalid">
            {registerForm.errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Check
          type="checkbox"
          label={t("register.showPassword")}
          className="mb-3"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />

        <Form.Group className="mb-3">
          <Form.Label>{t("register.nickname")}</Form.Label>
          <Form.Control
            name="nickname"
            value={registerForm.values.nickname}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
            isInvalid={
              !!registerForm.errors.nickname && registerForm.touched.nickname
            }
            placeholder={t("register.placeholders.nickname")}
          />
          <Form.Control.Feedback type="invalid">
            {registerForm.errors.nickname}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>{t("register.country")}</Form.Label>
          <Form.Select
            name="country"
            value={registerForm.values.country}
            onChange={registerForm.handleChange}
          >
            <option value="South Korea (+82)">South Korea (+82)</option>
            <option value="Turkey (+90)">Turkey (+90)</option>
            <option value="USA (+1)">USA (+1)</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>{t("register.phone")}</Form.Label>
          <Form.Control
            name="phone"
            value={registerForm.values.phone}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
            isInvalid={
              !!registerForm.errors.phone && registerForm.touched.phone
            }
            placeholder={t("register.placeholders.phone")}
          />
          <Form.Control.Feedback type="invalid">
            {registerForm.errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>{t("register.uid")}</Form.Label>
          <Form.Control
            name="uidCode"
            value={registerForm.values.uidCode}
            onChange={registerForm.handleChange}
            placeholder={t("register.placeholders.uid")}
          />
        </Form.Group>

        <Button type="submit" className="w-100 btn btn-primary">
          {t("register.submit")}
        </Button>

        {registrationError && (
          <div className="alert alert-danger mt-3 text-center">
            {registrationError}
          </div>
        )}

        <div className="text-center mt-3">
          <small>
            {t("register.haveAccount")} <a href="#">{t("register.login")}</a>
          </small>
        </div>
      </Form>
    </Container>
  );
};

export default SignUpPage;

import { useNavigate } from "react-router";

import useStore from "@/store/useStore";
import { submitForm } from "@/services/firebase";

import Formik from "#/form/Formik";
import {
  initialValues,
  validationSchema,
  universities,
  majors,
  grades,
  preferences,
} from "@/schemas/application";

import Section from "#/form/Section";
import Input from "#/atoms/Input";
import Select from "#/atoms/Select";

export default function Form() {
  const { user, addToast } = useStore();
  const navigate = useNavigate();

  function onSubmit(values, actions) {
    return submitForm(values).then(() => {
      addToast("Başvurunuz başarıyla gönderildi!", "success");
      navigate("/thank-you");
      actions.resetForm();
    });
  }

  return (
    <Formik
      initialValues={
        user
          ? {
              ...initialValues,
              name: user.name,
              surname: user.surname,
              email: user.email,
              "email-again": user.email,
            }
          : initialValues
      }
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <Section name="Kişisel Bilgiler">
        <Input label="Ad" name="name" type="text" />
        <Input label="Soyad" name="surname" type="text" />
        <Input label="E-posta" name="email" type="email" />
        <Input label="E-posta Doğrulayın" name="email-again" type="email" />
        <Input label="Telefon" name="phone" type="tel" />
        <Input label="TCKN" name="id" type="text" />
      </Section>
      <Section name="Eğitim">
        <Select label="Üniversite" options={universities} name="university" />
        <Select label="Bölüm" options={majors} name="major" />
        <Select label="Sınıf" options={grades} name="grade" />
      </Section>
      <Section name="Staj">
        <Select
          label="1. Staj Tercihin"
          options={preferences}
          name="preference-first"
        />
        <Select
          label="2. Staj Tercihin"
          options={preferences}
          name="preference-second"
        />
        <Select
          label="3. Staj Tercihin"
          options={preferences}
          name="preference-third"
        />
      </Section>
    </Formik>
  );
}

import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

import useStore from "@/store/useStore";
import { submitForm } from "@/services/firebase";

import { getApplication } from "@/services/firebase";

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

export default function Form({ id }) {
  const [application, setApplication] = useState();

  useEffect(() => {
    getApplication(id).then(setApplication);
  }, []);

  const { user, addToast } = useStore();
  const navigate = useNavigate();

  function onSubmit(values, actions) {
    return submitForm({ application: application.id, ...values }).then(() => {
      addToast("Başvurunuz başarıyla gönderildi!", "success");
      navigate("/redirect/application");
      actions.resetForm();
    });
  }

  if (application)
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
        <h2 className="fw-normal">{application.name}</h2>
        <span className="badge text-bg-primary">{application.department}</span>

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

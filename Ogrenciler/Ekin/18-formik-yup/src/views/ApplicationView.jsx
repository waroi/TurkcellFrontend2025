import { Form, Formik } from "formik";
import {
  initialValues,
  validationSchema,
  universities,
  majors,
  grades,
  preferences,
} from "../schemas/application";
import selectMap from "../util/selectMap";
import { submitForm } from "../services/firebase";

import Input from "../components/Input";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import useUserStore from "../store/useUserStore";

export default function ApplicationView() {
  const { user } = useUserStore();
  async function onSubmit(values, actions) {
    await submitForm(values);
    actions.resetForm();
  }

  return (
    <div className="container">
      <h1 className="mb-5 fw-normal">Turkcell Atmosware Başvuru Formu</h1>
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
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form>
            <h2 className="mb-4 fw-medium fs-3">Kişisel Bilgiler</h2>
            <Input label="Ad" name="name" type="text" />
            <Input label="Soyad" name="surname" type="text" />
            <Input label="E-posta" name="email" type="email" />
            <Input label="E-posta Doğrulayın" name="email-again" type="email" />
            <Input label="Telefon" name="phone" type="tel" />
            <Input label="TCKN" name="id" type="text" />

            <h2 className="mt-5 mb-4 fw-medium fs-3">Eğitim</h2>
            <Select label="Üniversite" name="university">
              {selectMap(universities)}
            </Select>
            <Select label="Bölüm" name="major">
              {selectMap(majors)}
            </Select>
            <Select label="Sınıf" name="grade">
              {selectMap(grades)}
            </Select>

            <h2 className="mt-5 mb-4 fw-medium fs-3">Staj</h2>
            <Select label="1. Staj Tercihin" name="preference-first">
              {selectMap(preferences)}
            </Select>
            <Select label="2. Staj Tercihin" name="preference-second">
              {selectMap(preferences)}
            </Select>
            <Select label="3. Staj Tercihin" name="preference-third">
              {selectMap(preferences)}
            </Select>
            <Checkbox name="terms-and-conditions">
              <a href="#">Aydınlatma Metni</a>'ni okudum.
            </Checkbox>
            <Checkbox name="kvkk">
              <a href="#">KVKK Metni</a>'ni okudum.
            </Checkbox>
            <Button disabled={isSubmitting}>Başvur</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

import { useState } from "react";
import { Form, Formik } from "formik";
import Input from "./components/Input";
import Select from "./components/Select";
import {
  initialValues,
  validationSchema,
  universities,
  majors,
} from "./schema.js";
import "./App.scss";

function App() {
  function onSubmit() {
    console.log("aloo");
  }

  return (
    <main>
      <div className="container mt-5 pt-5">
        <h1 className="mb-5 fw-normal">Turkcell Atmosware Başvuru Formu</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <h2 className="mb-4 fw-medium fs-3">Kişisel Bilgiler</h2>
              <Input label="Ad" name="name" type="text" />
              <Input label="Soyad" name="surname" type="text" />
              <Input label="E-posta" name="email" type="email" />
              <Input
                label="E-posta Doğrulayın"
                name="emailAgain"
                type="email"
              />
              <Input label="Telefon" name="phone" type="tel" />
              <Input label="TCKN" name="id" type="text" />

              <h2 className="mt-5 mb-4 fw-medium fs-3">Eğitim</h2>
              <Select label="Üniversite" name="university">
                {universities.map((university, index) => (
                  <option
                    key={index}
                    value={university.toLowerCase().replaceAll(" ", "-")}
                  >
                    {university}
                  </option>
                ))}
              </Select>
              <Select label="Bölüm" name="major">
                {majors.map((major, index) => (
                  <option
                    key={index}
                    value={major.toLowerCase().replaceAll(" ", "-")}
                  >
                    {major}
                  </option>
                ))}
              </Select>
              <Select label="Sınıf" name="grade">
                <option value="P">Hazırlık</option>
                <option value="1">1. Sınıf</option>
                <option value="2">2. Sınıf</option>
                <option value="3">3. Sınıf</option>
                <option value="4">4. Sınıf</option>
                <option value="G">Mezun</option>
              </Select>

              <h2 className="mt-5 mb-4 fw-medium fs-3">Staj</h2>
              <Select label="1. Staj Tercihin" name="preference-first">
                {majors.map((major, index) => (
                  <option
                    key={index}
                    value={major.toLowerCase().replaceAll(" ", "-")}
                  >
                    {major}
                  </option>
                ))}
              </Select>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
}

export default App;

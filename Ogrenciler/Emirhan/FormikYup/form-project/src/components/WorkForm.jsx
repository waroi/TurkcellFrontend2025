import React from "react";
import { Form, Formik } from "formik";
// import { basicSchema } from "../schema";
import FormInput from "./FormInput";
import ArrayInput from "./ArrayInput";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadString } from "firebase/storage";
import { uploadJobForm } from "../firebase/firebaseUpload";

function WorkForm() {
  const initialValues = {
    name: "",
    surname: "",
    birthyear: "",
    gender: "",
    phonenumber: "",
    address: "",
    salary: "",
    motivation: "",
    email: "",
    school: "",
    department: "",
    grade: "",
    position: "",
    foreignlanguage: [],
    experience: [],
    technologies: [],
    projects: [],
    certificates: [],
    volunteerwork: [],
    socialmedia: [],
    references: [],
  };

  const singleFields = [
    { name: "name", type: "text", label: "Ad" },
    { name: "surname", type: "text", label: "Soyad" },
    { name: "birthyear", type: "date", label: "Doğum Tarihi" },
    { name: "phonenumber", type: "number", label: "Telefon Numarası" },
    { name: "address", type: "text", label: "Adres" },
    { name: "salary", type: "number", label: "Maaş Beklentisi" },
    { name: "motivation", type: "text", label: "Başvuru Motivasyonu" },
    { name: "email", type: "email", label: "Email" },
  ];

  const arrayFields = [
    { name: "foreignlanguage", label: "Yabancı Dil" },
    { name: "experience", label: "Deneyim" },
    { name: "technologies", label: "Kullandığınız Teknoloji(ler)" },
    { name: "projects", label: "Proje" },
    { name: "certificates", label: "Sertifika" },
    { name: "volunteerwork", label: "Gönüllü Çalışma" },
    { name: "socialmedia", label: "Sosyal Medya" },
    { name: "references", label: "Referans" },
  ];



  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        // validationSchema={basicSchema}
        onSubmit={async (values, { resetForm, setSubmitting, setErrors }) => {
          console.log("fonksiyon çalıştı");
          const filteredValues = Object.fromEntries(
            Object.entries(values).filter(([key]) => !key.endsWith("Input"))
          );
          await uploadJobForm(filteredValues);
          resetForm();


        }}
      >
        {({ values, setFieldValue, isSubmitting, errors }) => (
          <Form className="my-5 d-flex flex-column align-items-center">

            {singleFields.map((item) => (
              <FormInput key={item.name} label={item.label} field={item.name} type={item.type} />
            ))}


            {arrayFields.map((item) => (
              <ArrayInput
                key={item.name}
                field={item.name}
                label={item.label}
                values={values}
                setFieldValue={setFieldValue}
              />
            ))}

            <button className="btn bg-green" type="submit" onClick={() => console.log("Butona tıklandı!")}>
              Başvur
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default WorkForm;



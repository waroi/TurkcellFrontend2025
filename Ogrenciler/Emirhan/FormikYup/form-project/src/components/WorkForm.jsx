import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { basicSchema } from "../schema";
import FormInput from "./FormInput";
import ArrayInput from "./ArrayInput";

function WorkForm() {
  const initialValues = {
    name: "",
    surname: "",
    birthyear: null,
    gender: "",
    phonenumber: "",
    address: "",
    salary: "",
    motivation: "",
    email: "",
    education: [],
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
    { name: "gender", type: "text", label: "Cinsiyet" },
    { name: "phonenumber", type: "number", label: "Telefon Numarası" },
    { name: "address", type: "text", label: "Adres" },
    { name: "salary", type: "number", label: "Maaş Beklentisi" },
    { name: "motivation", type: "text", label: "Başvuru Motivasyonu" },
    { name: "email", type: "email", label: "Email" },
  ];
  const arrayFields = [
    { name: "education", label: "Eğitim Durumu" },
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
        validationSchema={basicSchema}
        onSubmit={(values, { resetForm }) => {
          const filteredValues = Object.fromEntries(
            Object.entries(values).filter(([key]) => !key.endsWith("Input"))
          );

          fetch("http://localhost:3000/jobApplications", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(filteredValues),
          })
            .then((response) => {
              if (!response.ok) throw new Error("Veri kaydedilirken hata oluştu.");
              alert("Başarıyla kaydedildi!");
              resetForm();
            })
            .catch((error) => {
              console.error("Hata:", error);
              alert("Bir hata oluştu, tekrar deneyin.");
            });
        }}

      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className="my-5">
            {singleFields.map((item) => (
              <FormInput
                key={item.name}
                label={item.label}
                field={item.name}
                type={item.type} />
            ))}

            {arrayFields.map((item) => (
              <ArrayInput
                key={item.name}
                field={item.name}
                label={item.label}
                errors={errors}
                values={values}
                touched={touched}
                setFieldValue={setFieldValue}
              />
            ))}

            <button className="btn btn-danger" type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default WorkForm;

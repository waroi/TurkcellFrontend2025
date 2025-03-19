import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { basicSchema } from "../schema";
import FormInput from "./FormInput";
import ArrayInput from "./ArrayInput";

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
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
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

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default WorkForm;

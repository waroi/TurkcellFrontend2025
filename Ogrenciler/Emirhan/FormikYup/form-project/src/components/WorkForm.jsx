import React from "react";
import { Form, Formik } from "formik";
import { basicSchema } from "../schema"; 
import FormInput from "./FormInput";
import ArrayInput from "./ArrayInput";
import { db } from "../firebase/firebase"; 
import { collection, addDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadString } from "firebase/storage"; 

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
    cvFile: "", 
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

  const handleFileChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFieldValue("cvFile", reader.result.split(",")[1]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={basicSchema} 
        onSubmit={async (values, { resetForm, setSubmitting, setErrors }) => {
          setSubmitting(true); 
          const filteredValues = Object.fromEntries(
            Object.entries(values).filter(([key]) => key !== "cvFile") 
          );

          try {
         
            const docRef = await addDoc(collection(db, "jobApplications"), filteredValues);

        
            if (values.cvFile) {
              const storage = getStorage();
              const storageRef = ref(storage, `cvFiles/${values.email}_${Date.now()}.txt`);
              await uploadString(storageRef, values.cvFile, "base64");
            }

            alert("Başvuru başarıyla kaydedildi!");
            resetForm(); 
          } catch (error) {
            console.error("Hata:", error);
            alert("Bir hata oluştu, tekrar deneyin."); 
            setErrors({ submit: "Başvuru sırasında bir hata oluştu." }); 
          } finally {
            setSubmitting(false); 
          }
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


            <div className="mb-3">
              <label className="form-label">CV Yükleyin:</label>
              <input
                type="file"
                className="form-control"
                accept=".pdf,.doc,.docx,.txt" 
                onChange={(e) => handleFileChange(e, setFieldValue)}
                disabled={isSubmitting} 
              />
              {errors.submit && <div style={{ color: "red" }}>{errors.submit}</div>} 
            </div>

            <button className="btn bg-green" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Yükleniyor..." : "Başvur"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default WorkForm;



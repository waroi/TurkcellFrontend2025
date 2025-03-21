import { Form, Formik } from "formik";
import { formSchema } from "../schemas/formSchema";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { useNavigate } from "react-router";
import { ApplicationService } from "../services/ApplicationService";

const countries = ["Türkiye", "ABD", "Almanya", "Fransa"];
const cities = ["İstanbul", "Ankara", "İzmir", "Bursa"];
const universities = ["Boğaziçi", "ODTÜ", "İTÜ", "Koç Üniversitesi"];
const departments = [
  "Bilgisayar Mühendisliği",
  "Elektrik Elektronik",
  "Makine",
  "Endüstri",
];
const skillsOptions = ["JavaScript", "React", "Node.js", "Python", "Java"];

const InfoForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    try {
      const addApplicationResponse = await ApplicationService.addApplication(
        values
      );
      if (addApplicationResponse.success) {
        navigate("/gift");
        alert(addApplicationResponse.message);
        actions.resetForm();
      }
    } catch (error) {
      console.error("Başvuru hatası:", error);
      alert("Başvuru sırasında bir hata oluştu!");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Başvuru Formu</h2>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          phone: "",
          birthDate: "",
          country: "",
          city: "",
          university: "",
          graduationStatus: false,
          graduationYear: "",
          department: "",
          gpa: "",
          linkedin: "",
          summary: "",
          skills: [],
          experience: "",
          projects: "",
        }}
        validationSchema={formSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form className="d-flex flex-column gap-3">
            <CustomInput
              type="text"
              label="Adınız"
              name="firstName"
              placeholder="Adınızı giriniz"
            />
            <CustomInput
              type="text"
              label="Soyadınız"
              name="lastName"
              placeholder="Soyadınızı giriniz"
            />
            <CustomInput
              type="email"
              label="E-Posta"
              name="email"
              placeholder="E-posta adresinizi giriniz"
            />
            <CustomInput
              type="text"
              label="Telefon"
              name="phone"
              placeholder="Telefon numaranızı giriniz"
            />
            <CustomInput type="date" label="Doğum Tarihi" name="birthDate" />

            <CustomSelect label="Ülke" name="country" options={countries} />
            <CustomSelect label="Şehir" name="city" options={cities} />
            <CustomSelect
              label="Üniversite"
              name="university"
              options={universities}
            />
            <CustomSelect
              label="Bölüm"
              name="department"
              options={departments}
            />

            <CustomCheckbox label="Mezun Oldum" name="graduationStatus" />
            {values.graduationStatus && (
              <CustomInput
                type="text"
                label="Mezuniyet Yılı"
                name="graduationYear"
                placeholder="Mezuniyet yılınızı giriniz"
              />
            )}

            <CustomInput
              type="number"
              step="0.01"
              label="GPA (Not Ortalaması)"
              name="gpa"
              placeholder="Ortalamanızı giriniz"
            />

            <CustomInput
              type="text"
              label="LinkedIn Profiliniz"
              name="linkedin"
              placeholder="LinkedIn URL'nizi giriniz"
            />

            <CustomInput
              type="textarea"
              label="Kariyer Hedefleriniz"
              name="summary"
              placeholder="Kısa bir açıklama yazınız"
            />

            <CustomSelect
              label="Yetenekler"
              name="skills"
              options={skillsOptions}
              multiple
            />

            <CustomInput
              type="textarea"
              label="İş / Staj Deneyimleriniz"
              name="experience"
              placeholder="Deneyimlerinizi yazınız"
            />

            <CustomInput
              type="textarea"
              label="Projeleriniz"
              name="projects"
              placeholder="Yaptığınız projeleri yazınız"
            />

            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-primary"
            >
              Gönder
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InfoForm;

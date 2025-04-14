import { Form, Formik } from "formik";
import { formSchema } from "../schemas/formSchema";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { useInfoForm } from "../utils/hooks/useInfoForm";
import { cities, countries, departments, skillsOptions, universities } from "../utils/constans/formOptions";
import styles from './InfoForm.module.css';

const InfoForm = () => {
  const { handleSubmit } = useInfoForm()

  return (
    <div className={styles.formContainer}>
      <div className={styles.formCard}>
        <h2 className={styles.formTitle}>Başvuru Formu</h2>
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
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values }) => (
            <Form className={styles.applicationForm}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <CustomInput
                    type="text"
                    label="Adınız"
                    name="firstName"
                    placeholder="Adınızı giriniz"
                  />
                </div>
                <div className={styles.formGroup}>
                  <CustomInput
                    type="text"
                    label="Soyadınız"
                    name="lastName"
                    placeholder="Soyadınızı giriniz"
                  />
                </div>
                <div className={styles.formGroup}>
                  <CustomInput
                    type="email"
                    label="E-Posta"
                    name="email"
                    placeholder="E-posta adresinizi giriniz"
                  />
                </div>
                <div className={styles.formGroup}>
                  <CustomInput
                    type="text"
                    label="Telefon"
                    name="phone"
                    placeholder="Telefon numaranızı giriniz"
                  />
                </div>
                <div className={styles.formGroup}>
                  <CustomInput type="date" label="Doğum Tarihi" name="birthDate" />
                </div>
                <div className={styles.formGroup}>
                  <CustomSelect label="Ülke" name="country" options={countries} />
                </div>
                <div className={styles.formGroup}>
                  <CustomSelect label="Şehir" name="city" options={cities} />
                </div>
                <div className={styles.formGroup}>
                  <CustomSelect
                    label="Üniversite"
                    name="university"
                    options={universities}
                  />
                </div>
                <div className={styles.formGroup}>
                  <CustomSelect
                    label="Bölüm"
                    name="department"
                    options={departments}
                  />
                </div>
              </div>

              <div className={`${styles.formGroup} ${styles.graduatinoBox} ${styles.checkboxGroup}`}>
                <CustomCheckbox label="Mezun Oldum" name="graduationStatus" />
              </div>

              {values.graduationStatus && (
                <div className={styles.formGroup}>
                  <CustomInput
                    type="text"
                    label="Mezuniyet Yılı"
                    name="graduationYear"
                    placeholder="Mezuniyet yılınızı giriniz"
                  />
                </div>
              )}

              <div className={styles.formGroup}>
                <CustomInput
                  type="number"
                  step="0.01"
                  label="GPA (Not Ortalaması)"
                  name="gpa"
                  placeholder="Ortalamanızı giriniz"
                />
              </div>

              <div className={styles.formGroup}>
                <CustomInput
                  type="text"
                  label="LinkedIn Profiliniz"
                  name="linkedin"
                  placeholder="LinkedIn URL'nizi giriniz"
                />
              </div>

              <div className={`${styles.formGroup} ${styles.formGroupFullWidth}`}>
                <CustomInput
                  type="textarea"
                  label="Kariyer Hedefleriniz"
                  name="summary"
                  placeholder="Kısa bir açıklama yazınız"
                />
              </div>

              <div className={`${styles.formGroup} ${styles.formGroupFullWidth}`}>
                <CustomSelect
                  label="Yetenekler"
                  name="skills"
                  options={skillsOptions}
                  multiple
                />
              </div>

              <div className={`${styles.formGroup} ${styles.formGroupFullWidth}`}>
                <CustomInput
                  type="textarea"
                  label="İş / Staj Deneyimleriniz"
                  name="experience"
                  placeholder="Deneyimlerinizi yazınız"
                />
              </div>

              <div className={`${styles.formGroup} ${styles.formGroupFullWidth}`}>
                <CustomInput
                  type="textarea"
                  label="Projeleriniz"
                  name="projects"
                  placeholder="Yaptığınız projeleri yazınız"
                />
              </div>

              <div className={styles.formSubmit}>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className={styles.submitButton}
                >
                  {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default InfoForm
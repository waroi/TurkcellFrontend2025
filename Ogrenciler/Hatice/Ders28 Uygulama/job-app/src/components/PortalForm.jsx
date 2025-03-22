import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  try {
    localStorage.setItem("selectedPosition", values.position);
    console.log("Pozisyon başarıyla seçildi:", values.position);
    alert("Başvuru başarıyla kaydedildi!");
    await actions.resetForm(); 
  } catch (error) {
    console.error("Pozisyon seçilirken hata oluştu:", error);
  }
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: "", position: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form className="border border-5 my-4 p-5 rounded-3 d-flex flex-column gap-2">
            <CustomInput
              label="Kullancı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz"
              style={{ border: "1px solid var(--primary)", borderRadius: "5px" }}
            />
            <hr />
            <CustomSelect
              label="Pozisyon"
              name="position"
              style={{ border: "1px solid var(--primary)", borderRadius: "5px" }}
            >
              <option value="" disabled>
                Lütfen Bir Pozisyon Seçiniz
              </option>
              <option value="Frontend">Frontend Developer</option>
              <option value="Backend">Backend Developer</option>
              <option value="Full Stack">Full Stack Developer</option>
            </CustomSelect>

            <hr />
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <hr />
            <button className="btn btn-outline-primary" disabled={isSubmitting} type="submit">
              Kaydet
            </button>
            <Link className="formLink" to="/">
              Ana Forma Git
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;

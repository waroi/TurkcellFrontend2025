import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { auth, db } from "../firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const onSubmit = async (values, actions) => {
  try {
    await addDoc(collection(db, "jobApplications"), {
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      linkedin: values.linkedin,
      coverLetter: values.coverLetter,
      createdAt: new Date(),
    });

    console.log("Başvuru başarıyla eklendi!");
    actions.resetForm();
  } catch (error) {
    console.error("Başvuru gönderilirken hata oluştu:", error);
  }
};

function GeneralForm() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
    }
  }, []);

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        coverLetter: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <div className="container fromContainer">
      <div>
        <h3 className="p-5 text-start form-title">{"{atmosware} Başvuru Sayfasına Hoşgeldiniz!"}</h3>
      </div>
      <form className="border border-5 my-4 p-3 rounded-3 generalForm" onSubmit={handleSubmit}>
        <div className="inputDiv m-2 d-flex justify-content-between">
          <label>Full Name : </label>
          <input
            type="text"
            value={values.fullName}
            onChange={handleChange}
            name="fullName"
            placeholder={errors.fullName ? errors.fullName : "Ad soyad giriniz"}
            className={errors.fullName ? "input-error" : ""}
          />
        </div>
        <div className="inputDiv m-2 d-flex justify-content-between">
          <label>Email :</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            name="email"
            placeholder={errors.email ? errors.email : "Mail adresinizi giriniz"}
            className={errors.email ? "input-error" : ""}
          />
        </div>
        <div className="inputDiv m-2 d-flex justify-content-between">
          <label>Phone : </label>
          <input
            type="number"
            value={values.phone}
            onChange={handleChange}
            name="phone"
            placeholder={errors.phone ? errors.phone : "Telefon numarası giriniz"}
            className={errors.phone ? "input-error" : ""}
          />
        </div>
        <div className="linkedin m-2 d-flex justify-content-between">
          <label>Linkedin : </label>
          <input
            type="url"
            value={values.linkedin}
            onChange={handleChange}
            name="linkedin"
            placeholder={errors.linkedin ? errors.linkedin : "Geçerli bir URL giriniz"}
            className={errors.linkedin ? "input-error" : ""}
          />
        </div>
        <div className="m-2 d-flex justify-content-between">
          <label>Pozisyon : </label>
          <select name="position" id="position" className="form-select w-50"
            style={{ border: "1px solid var(--primary)", borderRadius: "5px" }}>
            <option value="" disabled>
              Lütfen Bir Pozisyon Seçiniz
            </option>
            <option value="Frontend">Frontend Developer</option>
            <option value="Backend">Backend Developer</option>
            <option value="Full Stack">Full Stack Developer</option>
          </select>
        </div>
        <hr />
        <div className="coverLetter m-2 d-flex flex-column justify-content-between">
          <label className="text-align-left">Cover Letter</label>
          <textarea
            value={values.coverLetter}
            onChange={handleChange}
            name="coverLetter"
            placeholder={errors.coverLetter ? errors.coverLetter : "Geçerli bir ön yazı giriniz"}
            className={`form-control ${errors.coverLetter ? "input-error" : ""}`}
            rows="4"
          />
        </div>
        <hr />

        <button disabled={isSubmitting} type="submit" className="btn btn-outline-primary rounded m-3">
          Kaydet
        </button>
      </form>
    </div>
  );
}

export default GeneralForm;

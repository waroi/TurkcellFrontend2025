import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebaseConfig";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
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
        resume: "",
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
            id="fullName"
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
            id="email"
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
            id="phone"
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
            id="linkedin"
            placeholder={errors.linkedin ? errors.linkedin : "Geçerli bir URL giriniz"}
            className={errors.linkedin ? "input-error" : ""}
          />
        </div>
        <div className="resume m-2 d-flex justify-content-between">
          <label>Resume : </label>
          <input
            type="file"
            value={values.resume}
            onChange={handleChange}
            id="resume"
            className={errors.resume ? "input-error" : ""}
          />
        </div>
        <hr />
        <div className="coverLetter m-2 d-flex flex-column justify-content-between">
          <label className="text-align-left">Cover Letter</label>
          <textarea
            value={values.coverLetter}
            onChange={handleChange}
            id="coverLetter"
            placeholder={errors.coverLetter ? errors.coverLetter : "Geçerli bir ön yazı giriniz"}
            className={errors.coverLetter ? "input-error" : ""}
            rows="4"
          />
        </div>
        <hr />

        <button disabled={isSubmitting} type="submit" className="btn btn-outline-primary rounded m-3">
          Kaydet
        </button>
        <Link className="formLink" to="/portal">
          Portala Git
        </Link>
      </form>
    </div>
  );
}

export default GeneralForm;

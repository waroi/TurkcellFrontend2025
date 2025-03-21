import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function GeneralForm() {
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

  //   console.log(formik);
  return (
    <div className="container">
      <div>
      <h3 className="p-5 text-start form-title">{"{atmosware} Başvuru Sayfasına Hoşgeldiniz!"}</h3>
      </div>
      <form className="border border-5 my-4 p-5 rounded-3 " onSubmit={handleSubmit}>
        <div className="inputDiv m-2 d-flex justify-content-between">
          <label>Full Name : </label>
          <input
            type="text"
            value={values.fullName}
            onChange={handleChange}
            id="fullName"
            placeholder="Ad soyad giriniz"
            className={errors.fullName ? "input-error" : ""}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>
        <div className="inputDiv m-2 d-flex justify-content-between">
          <label>Email :</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="Mail adresinizi giriniz"
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="inputDiv m-2 d-flex justify-content-between">
          <label>Phone : </label>
          <input
            type="number"
            value={values.phone}
            onChange={handleChange}
            id="phone"
            placeholder="Telefon numarası giriniz"
            className={errors.phone ? "input-error" : ""}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <div className="linkedin m-2 d-flex justify-content-between">
          <label>Linkedin : </label>
          <input
            type="url"
            value={values.linkedin}
            onChange={handleChange}
            id="linkedin"
            placeholder="Geçerli bir URL giriniz"
            className={errors.linkedin ? "input-error" : ""}
          />
          {errors.linkedin && <p className="error">{errors.linkedin}</p>}
        </div>
        <div className="resume m-2 d-flex justify-content-between">
          <label>Resume : </label>
          <input
            type="file"
            value={values.resume}
            onChange={handleChange}
            id="resume"
            placeholder="Geçerli bir ön yazı giriniz"
            className={errors.resume ? "input-error" : ""}
          />
          {errors.resume && <p className="error">{errors.resume}</p>}
        </div>
        <div className="coverLetter m-2 d-flex justify-content-between">
          <label>Cover Letter : </label>
          <input
            type="text"
            value={values.coverLetter}
            onChange={handleChange}
            id="coverLetter"
            placeholder="Geçerli bir URL giriniz"
            className={errors.coverLetter ? "input-error" : "" } 
          />
          {errors.coverLetter && <p className="error">{errors.coverLetter}</p>}
        </div>

        <button disabled={isSubmitting} type="submit" className="m-3">
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

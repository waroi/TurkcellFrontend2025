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
    <form onSubmit={handleSubmit}>
        <div className="inputDiv">
        <label>fullName</label>
        <input
          type="name"
          value={values.fullName}
          onChange={handleChange}
          id="name"
          placeholder="Ad soyad giriniz"
          className={errors.fullName ? "input-error" : ""}
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}
      </div>
      <div className="inputDiv">
        <label>Email</label>
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
      <div className="inputDiv">
        <label>phone</label>
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
      <div className="linkedin">
        <label>Linkedin</label>
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
      <div className="resume">
        <label>resume</label>
        <input
          type="url"
          value={values.resume}
          onChange={handleChange}
          id="linkedin"
          placeholder="Geçerli bir ön yazı giriniz"
          className={errors.resume ? "input-error" : ""}
        />
        {errors.resume && <p className="error">{errors.resume}</p>}
      </div>
      <div className="coverLetter">
        <label>coverLetter</label>
        <input
          type="url"
          value={values.coverLetter}
          onChange={handleChange}
          id="coverLetter"
          placeholder="Geçerli bir URL giriniz"
          className={errors.coverLetter ? "input-error" : ""}
        />
        {errors.coverLetter && <p className="error">{errors.coverLetter}</p>}
      </div>
      
      <button disabled={isSubmitting} type="submit">
        Kaydet
      </button>
      <Link className="formLink" to="/portal">
        Portala Git
      </Link>
    </form>
  );
}

export default GeneralForm;

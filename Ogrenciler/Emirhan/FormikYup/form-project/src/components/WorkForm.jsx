import { useFormik } from "formik";
import { basicSchema } from "../schema";
import FormInput from "./FormInput";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function WorkForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        fullname: "",
        birthyear: null,
        gender: "",
        phonenumber: "",
        address: "",
        education: [],
        foreignlanguage: [],
        experience: [],
        technologies: [],
        salary: null,
        projects: [],
        certificates: [],
        volunteerwork: [],
        socialmedia: [],
        references: [],
        motivation: "",
        email: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <FormInput
          label="Full Name"
          value={values.fullname}
          handleChange={handleChange}
          error={errors.fullname}
          id="fullname"
          type="text"
          placeholder="Full Name"
        />
        <FormInput
          label="Birth Year"
          value={values.birthyear}
          handleChange={handleChange}
          error={errors.birthyear}
          id="birthyear"
          type="number"
          placeholder="Birth Year"
        />
        <FormInput
          label="Gender"
          value={values.gender}
          handleChange={handleChange}
          error={errors.gender}
          id="gender"
          type="string"
          placeholder="Gender"
        />
        <FormInput
          label="Phone Number"
          value={values.phonenumber}
          handleChange={handleChange}
          error={errors.phonenumber}
          id="phonenumber"
          type="number"
          placeholder="Phone Number"
        />
        <FormInput
          label="Address"
          value={values.address}
          handleChange={handleChange}
          error={errors.address}
          id="address"
          type="text"
          placeholder="Address"
        />
        <FormInput
          label="Education"
          value={values.education}
          handleChange={handleChange}
          error={errors.education}
          id="education"
          type="text"
          placeholder="Education"
        />
        <FormInput
          label="Foreign Language"
          value={values.foreignlanguage}
          handleChange={handleChange}
          error={errors.foreignlanguage}
          id="foreignlanguage"
          type="text"
          placeholder="Foreign Language"
        />
        <FormInput
          label="Experience"
          value={values.experience}
          handleChange={handleChange}
          error={errors.experience}
          id="experience"
          type="text"
          placeholder="Experience"
        />
        <FormInput
          label="Technologies"
          value={values.technologies}
          handleChange={handleChange}
          error={errors.technologies}
          id="technologies"
          type="text"
          placeholder="Technologies"
        />
        <FormInput
          label="Salary"
          value={values.salary}
          handleChange={handleChange}
          error={errors.salary}
          id="salary"
          type="number"
          placeholder="Salary"
        />
        <FormInput
          label="Projects"
          value={values.projects}
          handleChange={handleChange}
          error={errors.projects}
          id="projects"
          type="text"
          placeholder="Projects"
        />
        <FormInput
          label="Certificates"
          value={values.certificates}
          handleChange={handleChange}
          error={errors.certificates}
          id="certificates"
          type="text"
          placeholder="Certificates"
        />
        <FormInput
          label="Volunteer Work"
          value={values.volunteerwork}
          handleChange={handleChange}
          error={errors.volunteerwork}
          id="volunteerwork"
          type="text"
          placeholder="Volunteer Work"
        />
        <FormInput
          label="Social Media"
          value={values.socialmedia}
          handleChange={handleChange}
          error={errors.socialmedia}
          id="socialmedia"
          type="text"
          placeholder="Social Media"
        />
        <FormInput
          label="References"
          value={values.references}
          handleChange={handleChange}
          error={errors.references}
          id="references"
          type="text"
          placeholder="References"
        />
        <FormInput
          label="Motivation"
          value={values.motivation}
          handleChange={handleChange}
          error={errors.motivation}
          id="motivation"
          type="text"
          placeholder="Motivation"
        />
        <FormInput
          label="Email"
          value={values.email}
          handleChange={handleChange}
          error={errors.email}
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <button disabled={isSubmitting} type="submit">
        Kaydet
      </button>
    </form>
  );
}

export default WorkForm;

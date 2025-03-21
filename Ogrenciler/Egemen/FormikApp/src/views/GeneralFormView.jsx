import { Form, Formik } from "formik";
import CustomInput from "../components/molecules/CustomInput/CustomInput";
import CustomSelect from "../components/molecules/CustomSelect/CustomSelect";
import CustomCheckbox from "../components/molecules/CustomCheckbox/CustomCheckbox";
import Accordion from "../components/organisms/accordion/Accordion";
import { auth } from "../../firebase/firebase";
import Button from "../components/atoms/buttons/Button";
import { basicSchema } from "../schemas";
import onSubmit from "../hooks/onSubmit";

const GeneralForm = () => {
  const sections = [
    {
      title: "Personal Information",
      fields: (
        <div className="row g-3">
          <CustomInput
            label="Full Name"
            name="fullname"
            type="text"
            placeholder="Enter your full name"
            className="col-md-6"
          />
          <CustomInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="col-md-6"
          />
          <CustomInput
            label="Phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="col-md-6"
          />
          <CustomInput
            label="Birth Date"
            name="birthDate"
            type="date"
            className="col-md-6"
          />
          <CustomInput
            label="Address"
            name="address"
            type="textarea"
            placeholder="Enter your address"
            className="col-12"
          />
        </div>
      ),
    },
    {
      title: "Education",
      fields: (
        <div className="row g-3">
          <CustomSelect
            label="University"
            name="education.university"
            className="col-md-6"
          >
            <option value="">Select University</option>
            <option value="bogazici">Boğaziçi University</option>
            <option value="gsu">Galatasaray University</option>
            <option value="odtu">
              Middle East Technical University (ODTÜ)
            </option>
            <option value="itu">Istanbul Technical University (İTÜ)</option>
            <option value="hacettepe">Hacettepe University</option>
            <option value="bilkent">Bilkent University</option>
          </CustomSelect>
          <CustomInput
            label="Department"
            name="education.department"
            type="text"
            placeholder="Enter your department"
            className="col-md-6"
          />
          <CustomInput
            label="Graduation Year"
            name="education.graduationYear"
            type="number"
            placeholder="Enter graduation year"
            className="col-md-6"
          />
          <CustomInput
            label="GPA"
            name="education.gpa"
            type="number"
            step="0.01"
            placeholder="Enter your GPA"
            className="col-md-6"
          />
        </div>
      ),
    },
    {
      title: "Experience",
      fields: (
        <div className="row g-3">
          <CustomInput
            label="Years of Experience"
            name="experience.years"
            type="number"
            placeholder="Enter years of experience"
            className="col-md-6"
          />
          <CustomInput
            label="Current Company"
            name="experience.currentCompany"
            type="text"
            placeholder="Enter current company name"
            className="col-md-6"
          />
          <CustomInput
            label="Position"
            name="experience.position"
            type="text"
            placeholder="Enter your position"
            className="col-12"
          />
        </div>
      ),
    },
    {
      title: "Skills",
      fields: (
        <div className="row g-3">
          <div className="col-12">
            <label className="form-label me-3">Languages</label>
            <div className="d-flex gap-3">
              <CustomCheckbox label="Turkish" name="skills.languages.turkish" />
              <CustomCheckbox label="English" name="skills.languages.english" />
              <CustomCheckbox label="German" name="skills.languages.german" />
            </div>
          </div>
          <div className="col-12">
            <label className="form-label me-3">Programming Languages</label>
            <div className="d-flex gap-3">
              <CustomCheckbox
                label="JavaScript"
                name="skills.programmingLanguages.javascript"
              />
              <CustomCheckbox
                label="Python"
                name="skills.programmingLanguages.python"
              />
              <CustomCheckbox
                label="Java"
                name="skills.programmingLanguages.java"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Additional Information",
      fields: (
        <div className="row g-3">
          <CustomInput
            label="Expected Salary"
            name="expectedSalary"
            type="number"
            placeholder="Enter your expected salary"
            className="col-md-6"
          />
          <div className="col-12 mt-3">
            <CustomCheckbox
              label="I accept the terms and conditions"
              name="isAccepted"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4 w-50">
        <h2 className="text-center mb-4">Application Form</h2>
        <Formik
          initialValues={{
            userId: `${auth.currentUser.uid}`,
            fullname: "",
            email: "",
            phone: "",
            birthDate: "",
            address: "",
            education: {
              university: "",
              department: "",
              graduationYear: "",
              gpa: "",
            },
            experience: { years: "", currentCompany: "", position: "" },
            skills: {
              languages: {
                turkish: false,
                english: false,
                german: false,
              },
              programmingLanguages: {
                javascript: false,
                python: false,
                java: false,
              },
            },
            expectedSalary: "",
            isAccepted: false,
            status: "Beklemede",
          }}
          onSubmit={onSubmit}
          validationSchema={basicSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <Accordion sections={sections} />
              <div className="d-flex justify-content-center mt-4">
                <Button
                  className="btn btn-primary px-5 py-2 rounded-pill shadow"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default GeneralForm;

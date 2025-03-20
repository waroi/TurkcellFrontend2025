import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import Accordion from "./organisms/accordion/Accordion";

import Button from "./atoms/buttons/Button";
import { basicSchema } from "../schemas";
import { saveApplication } from "../../firebase/dbController";
const GeneralForm = () => {
  const onSubmit = async (values, actions) => {
    console.log("values " + Object.values(values.skills.languages));
    console.log("actions " + actions);
    saveApplication(values);
    // await new Promise((resolve) => {
    //   setTimeout(resolve, 1000);
    // });
    actions.resetForm();
  };

  const sections = [
    {
      title: "Personal Information",
      fields: [
        <>
          <CustomInput
            label="Full Name"
            name="fullname"
            type="text"
            placeholder="Enter your full name"
          />
          <CustomInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <CustomInput
            label="Phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
          />
          <CustomInput label="Birth Date" name="birthDate" type="date" />
          <CustomInput
            label="Address"
            name="address"
            type="textarea"
            placeholder="Enter your address"
          />
        </>,
      ],
    },
    {
      title: "Education",
      fields: [
        <>
          <CustomSelect
            label="University"
            name="education.university"
            placeholder="Select your university"
          >
            <option value="">Select University</option>
            <option value="bogazici">Boğaziçi University</option>
            <option value="gsu">Galatasaray University</option>
            <option value="odtu">ODTÜ</option>
            <option value="itu">İTÜ</option>
            <option value="sutcu">Sütcü İmam University</option>
            <option value="beykent">Beykent University</option>
          </CustomSelect>
          <CustomInput
            label="Department"
            name="education.department"
            type="text"
            placeholder="Enter your department"
          />
          <CustomInput
            label="Graduation Year"
            name="education.graduationYear"
            type="date"
            placeholder="Enter graduation year"
          />
          <CustomInput
            label="GPA"
            name="education.gpa"
            type="number"
            step="0.01"
            placeholder="Enter your GPA"
          />
        </>,
      ],
    },
    {
      title: "Experience",
      fields: [
        <>
          <CustomInput
            label="Years of Experience"
            name="experience.years"
            type="number"
            placeholder="Enter years of experience"
          />
          <CustomInput
            label="Current Company"
            name="experience.currentCompany"
            type="text"
            placeholder="Enter current company name"
          />
          <CustomInput
            label="Position"
            name="experience.position"
            type="text"
            placeholder="Enter your position"
          />
        </>,
      ],
    },

    {
      title: "Skills",
      fields: [
        <>
          <div className="mb-3">
            <label className="form-label">Languages</label>
            <div className="d-flex gap-3">
              <CustomCheckbox
                children="Turkish"
                name="skills.languages.turkish"
                type="checkbox"
              />
              <CustomCheckbox
                children="English"
                name="skills.languages.english"
                type="checkbox"
              />
              <CustomCheckbox
                children="German"
                name="skills.languages.german"
                type="checkbox"
              />
            </div>
          </div>
          /*{" "}
          <div className="mb-3">
            <label className="form-label">Programming Languages</label>
            <div className="d-flex gap-3">
              <CustomCheckbox
                children="JavaScript"
                name="skills.programmingLanguages.javascript"
                type="checkbox"
              />
              <CustomCheckbox
                children="Python"
                name="skills.programmingLanguages.python"
                type="checkbox"
              />
              <CustomCheckbox
                children="Java"
                name="skills.programmingLanguages.java"
                type="checkbox"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Frameworks</label>
            <div className="d-flex gap-3">
              <CustomCheckbox
                children="React"
                name="skills.frameworks.react"
                type="checkbox"
              />
              <CustomCheckbox
                children="Angular"
                name="skills.frameworks.angular"
                type="checkbox"
              />
              <CustomCheckbox
                children="Vue.js"
                name="skills.frameworks.vue"
                type="checkbox"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Databases</label>
            <div className="d-flex gap-3">
              <CustomCheckbox
                children="MySQL"
                name="skills.databases.mysql"
                type="checkbox"
              />
              <CustomCheckbox
                children="PostgreSQL"
                name="skills.databases.postgresql"
                type="checkbox"
              />
              <CustomCheckbox
                children="MongoDB"
                name="skills.databases.mongodb"
                type="checkbox"
              />
            </div>
          </div>
        </>,
      ],
    },
    {
      title: "Additional Information",
      fields: [
        <>
          <CustomInput
            label="Expected Salary"
            name="expectedSalary"
            type="number"
            placeholder="Enter expected salary"
          />
          <CustomCheckbox
            label="I accept the terms and conditions"
            name="isAccepted"
            type="checkbox"
          />
        </>,
      ],
    },
  ];
  return (
    <>
      <div className="container py-5 d-flex justify-content-center">
        <Formik
          initialValues={{
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
            experience: {
              years: "",
              currentCompany: "",
              position: "",
            },
            skills: {
              languages: {},
              programmingLanguages: {},
              frameworks: {},
              databases: {},
            },
            certifications: [],
            projects: [],
            expectedSalary: "",
            isAccepted: false,
          }}
          onSubmit={onSubmit}
          validationSchema={basicSchema}
        >
          {({ isSubmitting }) => (
            <div className=" d-flex bg-white justify-content-center align-items-center">
              <Form className="w-100">
                <Accordion sections={sections}></Accordion>
                <div className="d-flex justify-content-center">
                  <Button
                    className="btn btn-primary mt-4"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default GeneralForm;

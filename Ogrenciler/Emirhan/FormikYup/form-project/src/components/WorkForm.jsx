import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { basicSchema } from "../schema";
import FormInput from "./FormInput";
import ArrayInput from "./ArrayInput";

function WorkForm() {
  const initialValues = {
    fullname: "",
    birthyear: "",
    gender: "",
    phonenumber: "",
    address: "",
    salary: "",
    motivation: "",
    email: "",
    education: [],
    foreignlanguage: [],
    experience: [],
    technologies: [],
    projects: [],
    certificates: [],
    volunteerwork: [],
    socialmedia: [],
    references: [],
  };

  const singleFields = [
    "fullname",
    "birthyear",
    "gender",
    "phonenumber",
    "address",
    "salary",
    "motivation",
    "email",
  ];

  const arrayFields = [
    "education",
    "foreignlanguage",
    "experience",
    "technologies",
    "projects",
    "certificates",
    "volunteerwork",
    "socialmedia",
    "references",
  ];

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={basicSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            {singleFields.map((field) => (
              <FormInput key={field} field={field} />
            ))}

            {arrayFields.map((field) => (
              <ArrayInput
                key={field}
                field={field}
                errors={errors}
                values={values}
                touched={touched}
                setFieldValue={setFieldValue}
              />
            ))}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default WorkForm;

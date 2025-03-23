import { useState } from "react";
import { Form, Formik } from "formik";
import { auth } from "../../firebase/firebase";
import { stepSchemas } from "../schemas";
//import onSubmit from "../hooks/onSubmit";
import CustomStepper from "../components/molecules/CustomStepper";
import useSubmitApplication from "../hooks/onSubmit";

const GeneralForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = async (validateForm) => {
    const errors = await validateForm();
    if (Object.keys(errors).length === 0) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);
  const submitApplication = useSubmitApplication(setActiveStep);

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4 w-50">
        <h2 className="text-center mb-4">Başvuru Formu</h2>
        <Formik
          initialValues={{
            userId: `${auth.currentUser?.uid}`,
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
          validationSchema={stepSchemas[activeStep]}
          onSubmit={submitApplication}
        >
          {({ isSubmitting, validateForm }) => (
            <Form>
              <CustomStepper
                handleBack={handleBack}
                handleNext={() => handleNext(validateForm)}
                activeStep={activeStep}
                isSubmitting={isSubmitting}
                setActiveStep={setActiveStep}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default GeneralForm;

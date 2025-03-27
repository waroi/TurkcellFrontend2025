import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { stepSchemas } from "../schemas";
import CustomStepper from "../components/molecules/CustomStepper/CustomStepper";
import useSubmitApplication from "../hooks/onSubmit";
import { unsubscribe } from "../../services/authServices";

const GeneralForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [userAuth, setUserAuth] = useState(null);
  useEffect(() => {
    unsubscribe(setUserAuth);
  }, [userAuth]);
  const handleNext = async (validateForm) => {
    const errors = await validateForm();
    if (Object.keys(errors).length === 0) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);
  const submitApplication = useSubmitApplication(setActiveStep);

  return (
    userAuth && (
      <div className="w-100 mx-auto py-5  justify-content-center row">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Başvuru Formu</h2>
            <Formik
              initialValues={{
                userId: `${userAuth.uid}`,
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
                status: "Değerlendirme",
                userMessage: "Değerlendirme Aşamasında",
                adminMessage: "Test Gönder",
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
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    )
  );
};

export default GeneralForm;

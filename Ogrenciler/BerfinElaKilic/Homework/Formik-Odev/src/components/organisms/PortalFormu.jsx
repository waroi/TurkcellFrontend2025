import React, { useState } from "react";
import { Formik, Form } from "formik";
import CustomComponent from "../atoms/CustomComponent";
import { Link } from "react-router";
import { LANGUAGES, levels, UNIVERSITIES } from "../../constants/constants";
import LanguageForm from "../molecules/forms/LanguageForm";
import ProfileForm from "../molecules/forms/ProfileForm";
import { advancedSchema } from "../../schemas";
import EduForm from "../molecules/forms/EduForm";
import Experiences from "../molecules/forms/Experiences";
import References from "../molecules/forms/References";
import CoverLetter from "../molecules/forms/CoverLetter";
import { useAuth } from "../../context/AuthContext";
import { addCandidateInfo } from "../../utils/services";
import PrimaryButton from "../atoms/Buttons/PrimaryButton";

const PortalFormu = () => {
  const [count, setCount] = useState(1);
  const { user } = useAuth();

  const onSubmit = async (values, actions) => {
    console.log(values);
    addCandidateInfo(user.id, values);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          graduationYear: "",
          department: "",
          university: "",
          dateofBirth: "",
          gender: "",
          phone: "",
          language: "",
          level: "",
          workPlace: "",
          startDate: "",
          endDate: "",
          position: "",
          coverLetter: "",
        }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <>
            <Form className="">
              <ProfileForm />
              <EduForm />
              <LanguageForm />
              <Experiences />
              <References />
              <CoverLetter />

              {/* <CustomCheckbox type="checkbox" name="isAccepted" /> */}
              <PrimaryButton
                disabled={isSubmitting}
                type="submit"
                className="btn btn-primary mt-3"
              >
                Kaydet
              </PrimaryButton>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default PortalFormu;

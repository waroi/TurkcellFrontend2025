import React, { useState } from "react";
import { Formik, Form } from "formik";
import CustomComponent from "../atoms/CustomComponent";
import { Link } from "react-router";
import { LANGUAGES, levels, UNIVERSITIES } from "../../constants/constants";
import LanguageForm from "../molecules/forms/LanguageForm";
import ProfileForm from "../molecules/forms/ProfileForm";
import { advancedSchema } from "../../schemas";
import EduForm from "../molecules/forms/EduForm";
import Experiences from "../molecules/Experiences";
import References from "../molecules/forms/References";
import CoverLetter from "../molecules/forms/CoverLetter";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

const PortalFormu = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          university: "",
          dateofBirth: "",
          gender: "",
          phoneNumber: "",
          language: "",
          level: "",
          isAccepted: false,
        }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <>
            <Form>
              <ProfileForm />
              <EduForm/>
              <LanguageForm/>
              <Experiences/>
              <References/>
              <CoverLetter/>

              {/* <CustomCheckbox type="checkbox" name="isAccepted" /> */}
              <button
                disabled={isSubmitting}
                type="submit"
                className="btn btn-primary mt-3"
              >
                Kaydet
              </button>
              <Link className="formLink" to="/">
                Ana Forma Git
              </Link>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default PortalFormu;

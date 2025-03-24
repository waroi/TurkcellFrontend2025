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
import DisplayForm from "./DisplayForm";

const PortalFormu = () => {
  const [count, setCount] = useState(1);
  const { user } = useAuth();
  const [submittedData, setSubmittedData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = async (values, actions) => {
    console.log(values);
    await addCandidateInfo(user.id, values);
    setSubmittedData(values);
    setIsEditing(false);
    actions.resetForm();
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      {submittedData && !isEditing ? (
        <DisplayForm data={submittedData} onEdit={handleEdit} />
      ) : (
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
            workPlace: "",
            startDate: "",
            endDate: "",
            position: "",
            coverLetter: "",
            languages: [],
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

                <div className="d-flex gap-2">
                  <PrimaryButton
                    disabled={isSubmitting}
                    type="submit"
                  >
                    Kaydet
                  </PrimaryButton>

                  {submittedData && (
                    <button
                      type="button"
                      onClick={handleCancel}
                    >
                      Vazgeç
                    </button>
                  )}
                </div>
              </Form>
            </>
          )}
        </Formik>
      )}
    </>
  );
};

export default PortalFormu;

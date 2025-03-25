import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useAuth } from "../../context/AuthContext";
import { addCandidateInfo, getCandidate } from "../../utils/services";
import DisplayForm from "./DisplayForm";
import PrimaryButton from "../atoms/Buttons/PrimaryButton";
import ProfileForm from "../molecules/forms/ProfileForm";
import EduForm from "../molecules/forms/EduForm";
import LanguageForm from "../molecules/forms/LanguageForm";
import Experiences from "../molecules/forms/Experiences";
import References from "../molecules/forms/References";
import CoverLetter from "../molecules/forms/CoverLetter";
import SecondaryButton from "../atoms/Buttons/SecondaryButton";

const PortalFormu = ({ setIsEditing, isEditing, user }) => {
  const [submittedData, setSubmittedData] = useState(null);

  const initialValues = submittedData || {
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    address: user.address || "",
    city: user.city || "",
    graduationYear: user.graduationYear || "",
    department: user.department || "",
    university: user.university || "",
    dateofBirth: user.dateofBirth || "",
    gender: user.gender || "",
    phone: user.phone || "",
    workPlace: user.workPlace || "",
    startDate: user.startDate || "",
    endDate: user.endDate || "",
    position: user.position || "",
    coverLetter: user.coverLetter || "",
    referenceName: user.referenceName || "",
    referencePhone: user.referencePhone || "",
    referenceEmail: user.referenceEmail || "",
    languages: [],
  };

  const onSubmit = async (values, actions) => {
    try {
      const response = await addCandidateInfo(user.id, values);
      if (response) {
        const user = await getCandidate(user.id);
        setUser(user);
      }

      setSubmittedData(values);
      setIsEditing(false);
      actions.resetForm();
    } catch (error) {
      console.error("Hata oluştu:", error);
    }
  };

  const handleCancel = (resetForm) => {
    resetForm({ values: submittedData });
    setIsEditing(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {({ isSubmitting, resetForm }) => (
          <Form>
            <ProfileForm />
            <EduForm />
            <LanguageForm />
            <Experiences />
            <References />
            <CoverLetter />

            <div className="d-flex gap-2">
              <PrimaryButton disabled={isSubmitting} type="submit">
                Kaydet
              </PrimaryButton>

              {submittedData && (
                <SecondaryButton
                  type="button"
                  onClick={() => handleCancel(resetForm)}
                >
                  Vazgeç
                </SecondaryButton>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PortalFormu;

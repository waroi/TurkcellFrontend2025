import { useState } from "react";
import { useFormik } from "formik";
import { auth } from "../../firebase_config";
import { basicSchema } from "../schema/index";
import { saveUser } from "../services/applicationService";

const useFormikOnInputs = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      adressFirst: "",
      adressSecond: "",
      city: "",
      province: "",
      postCode: "",
      country: "",
      phoneNumber: "",
      email: "",
      birthday: "",
      isTurkish: true,
      university: "",
      isGraduate: false,
      skills: "",
      status: "enchanted"
    },

    validationSchema: basicSchema,
    onSubmit: async (values) => {
      try {
        if (auth.currentUser !== null) {
          await saveUser(values);
          alert("Başvurunuz alınmıştır. İnsan Kaynakları size en kısa sürede geri dönüş sağlayacaktır.");
          resetForm();
        } else {
          setShow(true);
        }
      } catch (error) {
        console.log("OnSubmit Error", error);
      }
    },
  });
  return {
    show,
    handleClose,
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};

export default useFormikOnInputs;

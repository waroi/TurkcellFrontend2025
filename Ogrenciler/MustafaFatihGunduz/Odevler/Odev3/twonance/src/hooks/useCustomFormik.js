import { useFormik } from "formik";

const useCustomFormik = ({validationSchema, onSubmit }) => {
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      rePassword: "",
      nickName: "",
      uidCode: "",
      phone: "",
      lastName: "",
      adressFirst: "",
      adressSecond: "",
      city: "",
      country: "",
      phoneNumber: "",
      birthday: "",
      amount: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
          await onSubmit(values, resetForm);
      } catch (error) {
        console.log("OnSubmit Error", error);
      }
    },
  });

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

export default useCustomFormik;

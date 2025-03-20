import React from "react";
import { Formik, Form} from "formik";
import Uni from "./Uni";
import CustomComponent from "./CustomInput";
import { Link } from "react-router";
import { UNIVERSITIES } from "../constants/constants";
import { advancedSchema } from "../../../../../../Dersler/Ders28-Formik-Yup/src/schemas";


const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

const PortalFormu = () => {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", dateofBirth: "", gender: "", phoneNumber: "", language: "", isAccepted: false }}
        onSubmit={onSubmit}
        // validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomComponent
              as="input"
              className="form-control"
              label="Kullancı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz"
            />
            <CustomComponent
              className="form-control"
              label="doğum Tarihi"
              name="dateofBirth"
              type="date"
              placeholder="Doğum Tarhinizi Giriniz"
            />
            <div className="form-check form-check-inline">
              <CustomComponent 
              className="form-check-input" 
              type="radio" 
              id="female" 
              name="gender"
              value="option1"
              labelClass="form-check-label"
              label="Kadın"/>
            </div>
            <div className="form-check form-check-inline">
              <CustomComponent 
              className="form-check-input" 
              type="radio" id="male" 
              name="gender" 
              value="option2" 
              labelClass="form-check-label"
              label="Erkek"/>   
            </div>
            <div className="form-check form-check-inline">
              <CustomComponent 
              className="form-check-input" 
              type="radio" id="nogender" 
              name="gender" 
              value="option3" 
              labelClass="form-check-label"
              label="Belirtmek İstemiyorum"/>
            </div>
            <Uni />
            {/* <CustomCheckbox type="checkbox" name="isAccepted" /> */}
            <button disabled={isSubmitting} type="submit">
              Kaydet
            </button>
            <Link className="formLink" to="/">
              Ana Forma Git
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PortalFormu;


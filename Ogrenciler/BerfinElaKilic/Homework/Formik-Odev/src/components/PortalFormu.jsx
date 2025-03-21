import React, { useState } from "react";
import { Formik, Form } from "formik";
import CustomComponent from "./CustomInput";
import { Link } from "react-router";
import { LANGUAGES, levels, UNIVERSITIES } from "../constants/constants";
import LanguageForm from "./LanguageForm";
import ProfileForm from "./ProfileForm";
import { advancedSchema } from "../schemas";

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
              <CustomComponent
                id="university"
                as="select"
                className="form-select"
                label="Üniversite"
                name="university"
              >
                <option defaultValue="">Üniversitenizi Seçiniz</option>
                {UNIVERSITIES.map((uni) => (
                  <option key={uni} value={uni}>
                    {uni}
                  </option>
                ))}
              </CustomComponent>
              <CustomComponent
                as="input"
                className="form-control"
                label="Telefon Numarası"
                name="phoneNumber"
                type="text"
                placeholder="Telefon Numaranızı Giriniz"
              />
              <div>
                {Array.from({ length: count }, (v, i) => (
                  <LanguageForm key={i} />
                ))}
                <button
                  onClick={() => setCount(count + 1)}
                  className="btn btn-dark"
                >
                  Yeni Dil Ekle
                </button>
              </div>

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

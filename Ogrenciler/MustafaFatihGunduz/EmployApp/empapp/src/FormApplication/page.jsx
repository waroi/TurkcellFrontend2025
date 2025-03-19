import { useState, useEffect } from "react";
import Input from "../components/Input/Input";
import CheckBox from "../components/CheckBox/CheckBox";
import { useFormik } from "formik";

const Application = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
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
      },
    });
  return (
    <div>
      <div className="d-flex">
        <Input
          label={"Ad"}
          placeholder="Adınız"
          id={"name"}
          value={values.email}
          onChange={handleChange}
        />
        <Input
          label={"Soyad"}
          placeholder="Soyadınız"
          id={"lastName"}
          value={values.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="adress">
        <Input
          label={"Adress 1. Satır"}
          placeholder="Adres"
          id={"adress"}
          value={values.adressFirst}
          onChange={handleChange}
        />
        <Input
          label={"Adress 2. Satır"}
          placeholder="Adres 2"
          id={"adress"}
          value={values.adressSecond}
          onChange={handleChange}
        />
        <Input
          label={"Şehir"}
          placeholder="Şehir"
          id={"city"}
          value={values.city}
          onChange={handleChange}
        />
        <Input
          label={"İl/İlçe"}
          placeholder="İliniz"
          id={"province"}
          value={values.province}
          onChange={handleChange}
        />
        <Input
          label={"Posta Kodu"}
          placeholder="Posta Kodunuz"
          id={"postCode"}
          value={values.postCode}
          onChange={handleChange}
        />
      </div>
      <div className="phone">
        <Input
          label={"Telefon Numarası"}
          placeholder="Numaranız"
          id={"phoneNumber"}
          value={values.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="email">
        <Input
          label={"Email"}
          placeholder="Email Adresinizi giriniz."
          id={"email"}
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div className="birthday">
        <Input
          type="date"
          label={"Doğum Tarihiniz"}
          placeholder="Doğum tarihinizi giriniz."
          id={"birthday"}
          value={values.birthday}
          onChange={handleChange}
        />
      </div>
      <div className="isTurkish">
        <CheckBox
          id={"isTurkish"}
          label={"Türk Vatandaşı mısınız?"}
          onChange={handleChange}
          value={values.isTurkish}
        />
      </div>
    </div>
  );
};

export default Application;

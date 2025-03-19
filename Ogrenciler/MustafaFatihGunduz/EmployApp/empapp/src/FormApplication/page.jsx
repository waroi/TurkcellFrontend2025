import Input from "../components/Input/Input";
import CheckBox from "../components/CheckBox/CheckBox";
import { useFormik } from "formik";
import { basicSchema } from "../schema";

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
      validationSchema: basicSchema,
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex">
        <Input
          label={"Ad"}
          placeholder="Adınız"
          id={"name"}
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <Input
          label={"Soyad"}
          placeholder="Soyadınız"
          id={"lastName"}
          value={values.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>
      <div className="adress">
        <Input
          label={"Adress 1. Satır"}
          placeholder="Adres"
          id={"adressFirst"}
          value={values.adressFirst}
          onChange={handleChange}
        />
        {errors.adressFirst && <p className="error">{errors.adressFirst}</p>}

        <Input
          label={"Adress 2. Satır"}
          placeholder="Adres 2"
          id={"adressSecond"}
          value={values.adressSecond}
          onChange={handleChange}
        />
        {errors.adressSecond && <p className="error">{errors.adressSecond}</p>}

        <Input
          label={"Şehir"}
          placeholder="Şehir"
          id={"city"}
          value={values.city}
          onChange={handleChange}
        />
        {errors.city && <p className="error">{errors.city}</p>}

        <Input
          label={"İl/İlçe"}
          placeholder="İliniz"
          id={"province"}
          value={values.province}
          onChange={handleChange}
        />
        {errors.province && <p className="error">{errors.province}</p>}

        <Input
          label={"Posta Kodu"}
          placeholder="Posta Kodunuz"
          type="number"
          id={"postCode"}
          value={values.postCode}
          onChange={handleChange}
        />
        {errors.postCode && <p className="error">{errors.postCode}</p>}
      </div>
      <div className="phone">
        <Input
          label={"Telefon Numarası"}
          placeholder="Numaranız"
          type="number"
          id={"phoneNumber"}
          value={values.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && <p className="error">{errors.email}</p>}
      </div>
      <div className="email">
        <Input
          label={"Email"}
          placeholder="Email Adresinizi giriniz."
          id={"email"}
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
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
        {errors.birthday && <p className="error">{errors.birthday}</p>}
      </div>
      <div className="isTurkish">
        <CheckBox
          id={"isTurkish"}
          label={"Türk Vatandaşı mısınız?"}
          onChange={handleChange}
          value={values.isTurkish}
        />
        {errors.isTurkish && <p className="error">{errors.isTurkish}</p>}
      </div>
      <button type="submit">Gönder</button>
    </form>
  );
};

export default Application;

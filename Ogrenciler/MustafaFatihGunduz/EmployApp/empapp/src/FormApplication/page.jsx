import Input from "../components/Input/Input";
import CheckBox from "../components/CheckBox/CheckBox";
import { useFormik } from "formik";
import { basicSchema } from "../schema";
import { userService } from "../services/userService";
import AdminButton from "../components/AdminButton";
import { saveApplication } from "../services/applicationService";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "../../firebase_config";
import SignInModal from "../components/SignInModal/SignInModal";
import { useState, useEffect } from "react";
import { signOutFromApp } from "../services/auth_service";
import { checkIsHeAdmin } from "../services/db_service";
import "../pages/AdminPanel.css";

const Application = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [admin, setAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAdmin = async () => {
    const user = await checkIsHeAdmin();
    setAdmin(user);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user !== null);
    });

    return () => unsubscribe();
  }, []);
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
        skills: "",
      },
      validationSchema: basicSchema,
      onSubmit: async (values) => {
        await handleAdmin();
        try {
          if (auth.currentUser !== null) {
            await userService.saveUser(values);
            await saveApplication(values);
            console.log("Başarı ile kaydedildi");
          } else {
            setShow(true);
          }
        } catch (error) {
          console.log("OnSubmit Error", error);
        }
      },
    });

  const handleSignOut = async () => {
    await signOutFromApp();
    if (auth.currentUser === null) {
      alert("Oturumu kapattınız");
    } else {
      alert("Oturum kapatılamadı");
    }
  };
  return (
    <>
      <div className="container mt-4 adminContainer">
        <div className="d-flex justify-content-between mb-3">
          <AdminButton />

          {isLoggedIn && (
            <button
              className="btn btn-danger"
              onClick={async () => await handleSignOut()}
            >
              Çıkış yap
            </button>
          )}
        </div>
        <div className="card shadow p-4">
          <h2 className="text-center mb-4">Başvuru Formu</h2>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <Input
                  label="Ad"
                  placeholder="Adınız"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.name && <p className="text-danger">{errors.name}</p>}
              </div>
              <div className="col-md-6">
                <Input
                  label="Soyad"
                  placeholder="Soyadınız"
                  id="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.lastName && (
                  <p className="text-danger">{errors.lastName}</p>
                )}
              </div>
              <div className="col-md-12">
                <Input
                  label="Adres 1. Satır"
                  placeholder="Adresiniz"
                  id="adressFirst"
                  value={values.adressFirst}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.adressFirst && (
                  <p className="text-danger">{errors.adressFirst}</p>
                )}
              </div>
              <div className="col-md-12">
                <Input
                  label="Adres 2. Satır"
                  placeholder="İkinci Adres"
                  id="adressSecond"
                  value={values.adressSecond}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.adressSecond && (
                  <p className="text-danger">{errors.adressSecond}</p>
                )}
              </div>
              <div className="col-md-6">
                <Input
                  label="Şehir"
                  placeholder="Şehir"
                  id="city"
                  value={values.city}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.city && <p className="text-danger">{errors.city}</p>}
              </div>
              <div className="col-md-6">
                <Input
                  label="İl / İlçe"
                  placeholder="İliniz"
                  id="province"
                  value={values.province}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.province && (
                  <p className="text-danger">{errors.province}</p>
                )}
              </div>
              <div className="col-md-6">
                <Input
                  label="Posta Kodu"
                  placeholder="Posta Kodunuz"
                  type="number"
                  id="postCode"
                  value={values.postCode}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.postCode && (
                  <p className="text-danger">{errors.postCode}</p>
                )}
              </div>
              <div className="col-md-6">
                <Input
                  label="Ülke"
                  placeholder="Ülkeniz"
                  id="country"
                  value={values.country}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.country && (
                  <p className="text-danger">{errors.country}</p>
                )}
              </div>
              <div className="col-md-6">
                <Input
                  label="Telefon Numarası"
                  placeholder="Numaranız"
                  type="tel"
                  id="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.phoneNumber && (
                  <p className="text-danger">{errors.phoneNumber}</p>
                )}
              </div>
              <div className="col-md-6">
                <Input
                  label="Email"
                  placeholder="Email Adresiniz"
                  type="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>
              <div className="col-md-6">
                <Input
                  type="date"
                  label="Doğum Tarihiniz"
                  id="birthday"
                  value={values.birthday}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.birthday && (
                  <p className="text-danger">{errors.birthday}</p>
                )}
              </div>
              <div className="col-md-6">
                <CheckBox
                  id="isTurkish"
                  label="Türk Vatandaşı mısınız?"
                  onChange={handleChange}
                  checked={values.isTurkish}
                />
                {errors.isTurkish && (
                  <p className="text-danger">{errors.isTurkish}</p>
                )}
              </div>
              <div className="col-md-12">
                <Input
                  label="Üniversite"
                  placeholder="Üniversiteniz"
                  id="university"
                  value={values.university}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.university && (
                  <p className="text-danger">{errors.university}</p>
                )}
              </div>
              <div className="col-md-12">
                <Input
                  label="Yetenekleriniz"
                  placeholder="Yeteneklerinizi virgülle ayırarak yazınız (ör: React, JavaScript, CSS)"
                  id="skills"
                  value={values.skills}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.skills && (
                  <p className="text-danger">{errors.skills}</p>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Gönderiliyor..." : "Başvuruyu Gönder"}
              </button>
            </div>
          </form>
        </div>
        <SignInModal show={show} handleClose={handleClose} />
      </div>
    </>
  );
};

export default Application;

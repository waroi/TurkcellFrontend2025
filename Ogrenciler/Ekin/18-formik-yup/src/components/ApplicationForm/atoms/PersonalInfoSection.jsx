import React from "react";
import Input from "../../inputs/Input";

export default function PersonalInfoSection() {
  return (
    <>
      <h2 className="mb-4 fw-medium fs-3">Kişisel Bilgiler</h2>
      <Input label="Ad" name="name" type="text" />
      <Input label="Soyad" name="surname" type="text" />
      <Input label="E-posta" name="email" type="email" />
      <Input label="E-posta Doğrulayın" name="email-again" type="email" />
      <Input label="Telefon" name="phone" type="tel" />
      <Input label="TCKN" name="id" type="text" />
    </>
  );
}

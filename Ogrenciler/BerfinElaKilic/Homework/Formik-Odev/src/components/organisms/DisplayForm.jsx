import React from "react";
import PrimaryButton from "../atoms/Buttons/PrimaryButton";

const DisplayForm = ({ data, setIsEditing }) => {
  return (
    <div className="container p-4">
      <h2 className="mb-4">Başvuru Bilgileri</h2>

      <p>
        <strong>Ad:</strong> {data.firstName}
      </p>
      <p>
        <strong>Soyad:</strong> {data.lastName}
      </p>
      <p>
        <strong>Adres:</strong> {data.address}
      </p>
      <p>
        <strong>Şehir:</strong> {data.city}
      </p>
      <p>
        <strong>Üniversite:</strong> {data.university}
      </p>
      <p>
        <strong>Bölüm:</strong> {data.department}
      </p>
      <p>
        <strong>Mezuniyet Yılı:</strong> {data.graduationYear}
      </p>
      <p>
        <strong>Doğum Tarihi:</strong> {data.dateofBirth}
      </p>
      <p>
        <strong>Cinsiyet:</strong> {data.gender}
      </p>
      <p>
        <strong>Telefon:</strong> {data.phone}
      </p>

      <h4 className="mt-3">Yabancı Diller</h4>
      {data.languages?.length > 0 ? (
        <ul>
          {data.languages.map((lang, idx) => (
            <li key={idx}>
              {lang.language} - {lang.level}
            </li>
          ))}
        </ul>
      ) : (
        <p>Yabancı dil bilgisi yok.</p>
      )}

      <h4 className="mt-3">Deneyimler</h4>
      <p>
        <strong>Çalışma Yeri:</strong> {data.workPlace}
      </p>
      <p>
        <strong>Pozisyon:</strong> {data.position}
      </p>
      <p>
        <strong>Başlangıç Tarihi:</strong> {data.startDate}
      </p>
      <p>
        <strong>Bitiş Tarihi:</strong> {data.endDate}
      </p>

      <h4 className="mt-3">Ön Yazı</h4>
      <p>{data.coverLetter}</p>

      <PrimaryButton
        type="button"
        onClick={ () => setIsEditing(true)}
        className="btn btn-warning mt-3"
      >
        Düzenle
      </PrimaryButton>
    </div>
  );
};

export default DisplayForm;

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/Firebase";

const ApplicationDetailView = () => {
  const { applicationId } = useParams();
  const [application, setApplication] = useState(null);

  useEffect(() => {
    const fetchApplicationDetails = async () => {
      try {
        const docRef = doc(db, "applications", applicationId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setApplication(docSnap.data());
        } else {
          console.log("Başvuru bulunamadı!");
        }
      } catch (error) {
        console.error("Başvuru detayları alınırken hata oluştu:", error);
      }
    };

    fetchApplicationDetails();
  }, [applicationId]);

  return (
    <div className="container mt-4">
      <h2>Başvuru Detayları</h2>
      {application ? (
        <div>
          <p>
            <strong>Ad Soyad:</strong> {application.firstName}{" "}
            {application.lastName}
          </p>
          <p>
            <strong>Email:</strong> {application.email}
          </p>
          <p>
            <strong>Ülke:</strong> {application.country}
          </p>
          <p>
            <strong>Şehir:</strong> {application.city}
          </p>
          <p>
            <strong>Üniversite:</strong> {application.university}
          </p>
          <p>
            <strong>Bölüm:</strong> {application.department}
          </p>
          <p>
            <strong>Mezuniyet Durumu:</strong>{" "}
            {application.graduationStatus ? "Mezun" : "Henüz Mezun Değil"}
          </p>
          <p>
            <strong>Mezuniyet Yılı:</strong>{" "}
            {application.graduationYear || "Belirtilmemiş"}
          </p>
          <p>
            <strong>GPA:</strong> {application.gpa}
          </p>
        </div>
      ) : (
        <p>Detaylar yükleniyor...</p>
      )}
    </div>
  );
};

export default ApplicationDetailView;

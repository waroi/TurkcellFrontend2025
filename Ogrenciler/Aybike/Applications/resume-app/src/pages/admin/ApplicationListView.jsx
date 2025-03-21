import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ApplicationService } from "../../services/ApplicationService";
import "./ApplicationListView.css";

const ApplicationListView = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const applicationsData = await ApplicationService.getApplications();
        setApplications(applicationsData);
      } catch (error) {
        console.error("Başvuruları alırken hata oluştu:", error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Başvuru Listesi</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Ad Soyad</th>
            <th>Email</th>
            <th>Bölüm</th>
            <th>Üniversite</th>
            <th>Değerlendirme</th>
            <th>Detaylar</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.id}>
              <td>
                {application.firstName} {application.lastName}
              </td>
              <td>{application.email}</td>
              <td>{application.department}</td>
              <td>{application.university}</td>
              <td>
                {application.rate === 0 ? (
                  <small>Değerlendirilmemiş</small>
                ) : (
                  <>
                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={index}
                        style={{
                          color: index < application.rate ? "#FFD700" : "#ccc",
                          fontSize: "18px",
                        }}
                      >
                        ★
                      </span>
                    ))}
                    <small> ({application.rate}/5)</small>
                  </>
                )}
              </td>

              <td>
                <Link
                  to={`/admin/applications/${application.id}`}
                  className="btn btn-info"
                >
                  Detaylar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationListView;

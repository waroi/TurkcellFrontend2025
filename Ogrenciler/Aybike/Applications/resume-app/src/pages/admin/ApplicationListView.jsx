import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import { Link } from "react-router";

const ApplicationListView = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "applications"));
        const applicationsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
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

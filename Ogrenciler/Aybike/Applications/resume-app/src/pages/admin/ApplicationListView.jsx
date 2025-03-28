import { Link } from "react-router";
import { useApplicationList } from "../../utils/hooks/useApplicationList";
import styles from "./ApplicationListView.module.css";

const ApplicationListView = () => {
  const { applications, loading, error } = useApplicationList()

  return (
    <div className="container mx-auto">
      <h2 className={styles.heading}>Başvuru Listesi</h2>
      <table className={styles.table}>
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
                  className={styles.btnInfo}
                >
                  Detaylar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ApplicationListView
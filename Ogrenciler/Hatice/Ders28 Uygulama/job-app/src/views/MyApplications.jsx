import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const MyApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async (user) => {
      const q = query(
        collection(db, "jobApplications"),
        where("email", "==", user.email)
      );

      const querySnapshot = await getDocs(q);
      const apps = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setApplications(apps);
      setLoading(false);
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchApplications(user);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Yükleniyor...</p>;

  return (
    <div>
      <h2>Başvurularım</h2>
      {applications.length > 0 ? (
        applications.map((app) => (
          <div key={app.id} className={`p-4 border rounded my-2 border-${(app.status === "Olumlu" ? "success": app.status === "Olumsuz"? "danger":"warning") ?? "warning"} border-3`}>
            <p><strong>Pozisyon:</strong> {app.position}</p>
            <p><strong>Ad Soyad:</strong> {app.fullName}</p>
            <p><strong>Telefon:</strong> {app.phone}</p>
            <p><strong>LinkedIn:</strong> <a href={app.linkedin} target="_blank" rel="noreferrer">{app.linkedin}</a></p>
            <p><strong>Cover Letter:</strong> {app.coverLetter}</p>
            <p><strong>Başvuru Durumu:</strong> <span className={`badge text-bg-${(app.status === "Olumlu" ? "success": app.status === "Olumsuz"? "danger":"warning") ?? "warning"}`}>{app.status ?? "Beklemede"}</span> </p>
          </div>
        ))
      ) : (
        <p>Henüz başvurunuz bulunmamaktadır.</p>
      )}
    </div>
  );
};

export default MyApplications;

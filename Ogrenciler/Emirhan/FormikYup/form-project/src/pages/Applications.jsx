import React, { useEffect, useState } from "react";
import {
  fetchApplications,
  updateApplicationStatus,
} from "../firebase/firebaseUpload";
import Navbar from "../components/Navbar";

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const getApplications = async () => {
      const data = await fetchApplications();
      setApplications(data);
    };
    getApplications();
  }, []);

  return (
    <div className="container form-container">
      <Navbar />
      <table class="table table-striped mt-5">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Ad</th>
            <th scope="col">Soyad</th>
            <th scope="col">E-Mail</th>
            <th scope="col">Pozisyon</th>
            <th scope="col">Durum</th>
            <th scope="col">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => (
            <tr key={application.id}>
              <th scope="row">{index + 1}</th>
              <td>{application.name}</td>
              <td>{application.surname}</td>
              <td>{application.email}</td>
              <td>{application.position}</td>
              <td>
                <span class="custom-badge">{application.status}</span>
              </td>
              <td className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-success btn-sm"
                  onClick={() =>
                    updateApplicationStatus(application.id, "Test Aşamasında", application.email, application.name)
                  }
                >
                  <i className="fa-solid fa-circle-check"></i>
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => updateApplicationStatus(application.id, "Reddedildi", application.email, application.name)}>
                  <i className="fa-solid fa-circle-xmark"></i>
                </button>
                <button className="btn btn-primary btn-sm">
                  <i className="fa-solid fa-eye"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Applications;

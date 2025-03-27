import React from "react";

const CandidatesTable = ({ title, candidates, status }) => {
  return (
    <div className="col-lg-6 mb-5">
      <h4>{title}</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Email</th>
            <th>Doğru Sayısı</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>
          {candidates.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">
                Kayıt bulunamadı
              </td>
            </tr>
          ) : (
            candidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>{candidate.email}</td>
                <td>{candidate.score}/10</td>
                <td>{status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CandidatesTable;

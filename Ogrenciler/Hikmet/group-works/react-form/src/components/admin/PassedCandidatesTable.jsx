const PassedCandidatesTable = ({ candidates }) => (
    <div className="col-lg-6 mb-5">
      <h4>Geçen Adaylar</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Email</th>
            <th>Doğru Sayısı</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map(candidate => (
            <tr key={candidate.id}>
              <td>{candidate.email}</td>
              <td>{candidate.score}/10</td>
              <td>Geçti</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  export default PassedCandidatesTable;
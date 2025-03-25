import React from 'react';
import { useNavigate } from 'react-router-dom';

function Congrats() {
  const navigate = useNavigate();

  const handleViewApplications = () => {
    navigate("/my-applications");
  };

  return (
    <React.Fragment>
      <div className="alert alert-success">Tebrikler! Başvurunuz işleme alınmıştır. 🎉</div>
      <button className="btn btn-primary m-3" onClick={handleViewApplications}>
        Başvurularımı Görüntüle
      </button>
    </React.Fragment>
  );
}

export default Congrats;

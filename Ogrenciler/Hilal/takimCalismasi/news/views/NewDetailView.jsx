import React from "react";
import { useParams } from "react-router";

const NewDetailView = ({ news }) => {
  const { id, categoryName } = useParams();

  console.log("Category:", categoryName);
  console.log("ID:", id);
  console.log("News List:", news);

  const haber = news?.find((item) => item.key === String(id));
  if (!haber) {
    return <div className="container">Haber bulunamadı.</div>;
  }
  return (
    <div className="container p-3">
      <div className="card rounded-5 mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={haber.image}
              className="img-fluid h-100 object-fit-cover rounded-start-5"
              alt="..."
            />
          </div>
          <div className="col-md-8 p-4">
            <div className="card-body">
              <h5 className="card-title display-6 mb-5">{haber?.name}</h5>
              <p className="card-text display-6 fs-4">{haber?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDetailView;

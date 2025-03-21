import stringMap from "../util/stringMap";

export default function Application({ application, goSelected }) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title mb-3">
          {application.name} {application.surname}
        </h5>
        <p className="card-text text-capitalize">
          {stringMap(application.university)}, {stringMap(application.major)} -{" "}
          {stringMap(application.grade)}
        </p>
        <p className="card-text text-capitalize">
          {stringMap(application["preference-first"])}
        </p>
        {application.status ? (
          <p>
            Durum:
            {application.status == "accepted" ? (
              <span className="badge text-bg-success ms-2">Onaylandı</span>
            ) : (
              <span className="badge text-bg-danger ms-2">Reddedildi</span>
            )}
          </p>
        ) : (
          <button
            onClick={() => goSelected(application)}
            className="btn btn-primary"
          >
            İncele
          </button>
        )}
      </div>
    </div>
  );
}

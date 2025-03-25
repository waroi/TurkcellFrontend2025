import Button from "#/atoms/Button";

export default function AllApplicationCard({ application }) {
  return (
    <div className="col">
      <div className="card border-0 shadow h-100">
        <img src={application.image} className="card-img-top" />
        <div className="card-body d-flex flex-column">
          <p className="card-text opacity-50 text-muted mb-2 fw-bold">
            {application.department}
          </p>
          <h3 className="card-title fs-4 mb-3">{application.name}</h3>

          <p className="card-text">{application.description}</p>
          <div className="mt-auto">
            <Button to={`/application/${application.id}`}>Başvur</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

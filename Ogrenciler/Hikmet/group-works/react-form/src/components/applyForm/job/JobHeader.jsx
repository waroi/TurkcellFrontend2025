const JobHeader = ({ logo, title }) => {
  return (
    <div className="d-flex align-items-center mb-3">
      {logo && (
        <img
          src={logo}
          alt={`${title} logo`}
          className="rounded me-3"
          style={{ width: "60px", height: "60px", objectFit: "cover" }}
        />
      )}
      <h5 className="card-title mb-0">{title}</h5>
    </div>
  );
};

export default JobHeader;

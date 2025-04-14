const JobDescription = ({ description, requirements }) => {
  return (
    <>
      <p className="card-text">
        <strong>Description:</strong> {description}
      </p>

      {requirements && (
        <>
          <p className="card-text">
            <strong>Requirements:</strong>
          </p>
          <ul className="text-start">
            {Array.isArray(requirements) ? (
              requirements.map((req, index) => <li key={index}>{req}</li>)
            ) : (
              <li>{requirements}</li>
            )}
          </ul>
        </>
      )}
    </>
  );
};

export default JobDescription;

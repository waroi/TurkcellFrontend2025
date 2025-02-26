export default function PersonCard({ personData, imgURL }) {
  const defaultPerson =
    'https://thumbs.dreamstime.com/b/default-placeholder-businessman-half-length-portr-portrait-photo-avatar-man-gray-color-113622427.jpg';
  return (
    <>
      <div className='card mb-3 w-100'>
        <div className='row g-0'>
          <div className='col-md-3'>
          <img
              src={personData.profile_path ? `${imgURL}${personData?.profile_path}` : defaultPerson}
              className='img-fluid rounded-start'
              alt={personData.original_name + ' poster'}
              loading="lazy" // lazy loading
              width="100"
              height="150"
            />
          </div>
          <div className='col-md-9'>
            <div className='card-body'>
              <h5 className='card-title'>{personData.original_name}</h5>
              <p className='card-text'>{personData.known_for_department}</p>
              <p className='card-text'>
                <small className='text-body-secondary'>
                  {personData.popularity}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

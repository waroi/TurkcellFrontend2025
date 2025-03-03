const SliderPlaceholder = () => {
  return (
    <>
      <div className='carousel slide'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div
              className='placeholder col-12 bg-secondary'
              style={{ height: '600px' }}
            ></div>
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-center mt-3'>
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className='placeholder rounded-circle bg-secondary mx-2'
            style={{ width: '12px', height: '12px' }}
          ></span>
        ))}
      </div>
    </>
  );
};

export default SliderPlaceholder;

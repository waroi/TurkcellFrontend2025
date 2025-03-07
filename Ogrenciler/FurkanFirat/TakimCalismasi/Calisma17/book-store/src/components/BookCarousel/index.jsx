export default function BookCarousel() {
  return (
    <>
      <div id='carouselIndicators' className='carousel slide mb-3'>
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselIndicators'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselIndicators'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselIndicators'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src='https://cdn.appsrhino.com/new-website-2022/strapi/5_Reasons_why_Book_Store_App_is_Important_for_your_Business_1debd37727.jpg'
              className='d-block w-100 carousel-img object-fit-cover'
              alt='...'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='https://marketplace.canva.com/EAGSjFJ0Vp8/1/0/1600w/canva-green-artsy-book-announcement-email-header-5swul__K1Q0.jpg'
              className='d-block w-100 carousel-img object-fit-cover'
              alt='...'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?cs=srgb&dl=pexels-technobulka-2908984.jpg&fm=jpg'
              className='d-block w-100 carousel-img object-fit-cover'
              alt='...'
            />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselIndicators'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselIndicators'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  );
}

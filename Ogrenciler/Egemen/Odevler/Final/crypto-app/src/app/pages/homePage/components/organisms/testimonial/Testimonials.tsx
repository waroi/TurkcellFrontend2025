import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="container testimonials-container">
      <div className="row">
        <div className="col col-md-7 download-header">
          <h2 className="fw-bold fs-1">Our Customers Love What We Do</h2>
          <p className="text-dark fw-bold fs-5">
            Transform your idea into reality with finsweet
          </p>

          <p className="text-secondary fs-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="members">
            <div className="members-circles d-flex">
              <div className="members-circle-1"></div>
              <div className="members-circle-2"></div>
              <div className="members-circle-3"></div>
            </div>
            <div className="customer-reviews d-flex mt-3">
              <p className="fw-bold text-primary mx-1">30+</p>
              <p className="fw-medium  customer-reviews-header">
                Customer Reviews
              </p>
            </div>
          </div>
        </div>
        <div className="col col-md-5 testimonials-card ">
          <div className="testimonial-card d-flex flex-column">
            <div className="testimonial-card-text">
              <p className="fw-bold fs-4">
                “Great course I really enjoyed it and the course was way easy to
                learn with very good explanations of the code, I could easily
                understand and develop applications with the knowledge gathered
                during the course.”
              </p>
            </div>
            <div className="director d-flex align-items-center justify-content-between">
              <div className="director-circle"></div>
              <div className="director-info d-flex flex-column">
                <p className="fw-medium customer-reviews-header">Johny Andro</p>
                <p className="fw-medium customer-reviews-header">
                  Director,Company
                </p>
              </div>
              <Image
                src="/assets/header/Logo.svg"
                alt="ipsum"
                width={112.7}
                height={25.58}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

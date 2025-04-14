export default function Banner() {
    return (
      <div className="bg-primary text-white py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-3">
                Bahoot:Your Challenge Platform
              </h1>
              <p className="lead mb-4">
                Experience the best features and services designed to enhance your fast responding to questions.
              </p>
              <div className="d-grid gap-2 d-md-flex">
                <button className="btn btn-light btn-lg px-4 me-md-2">
                  Get Started
                </button>
                <button className="btn btn-outline-light btn-lg px-4">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5 bg-white bg-opacity-10 rounded">
                
                <div className="text-center p-5" >
                  <img style={{ height: "250px", display: "flex", alignItems: "center", justifyContent: "center" }} src="banner.jpeg"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const SignIn = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="w-100 ">
          <div className="card border-white shadow">
            <div className="card-body text-center p-5">
              <div className="row d-flex align-items-center">
                <div className="col-lg-7">
                  <img
                    src="https://img.freepik.com/free-photo/happy-caucasian-woman-shaking-hands-with-latin-man-business-meeting-with-lawyer-manager-hiring-beautiful-professional-woman-new-job_662251-184.jpg"
                    alt="İş görüşmesi"
                    className="img-fluid h-100 w-100 object-fit-cover"
                    style={{
                      borderTopLeftRadius: "0.375rem",
                      borderBottomLeftRadius: "0.375rem",
                    }}
                  />
                </div>
                <div className="col-lg-5">
                  <h2 className="card-title mb-4 text-success display-5">
                    Hoşgeldiniz
                  </h2>
                  <h5 className="card-subtitle mb-4 display-6 fs-4 ">
                    Başvuru sistemini kullanmak için lütfen giriş yapınız
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;

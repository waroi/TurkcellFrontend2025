import React from "react";
import Image from "next/image";
const LoginTable = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Device</th>
          <th scope="col">Date</th>
          <th scope="col">IP Adress</th>
          <th scope="col">2FA</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <Image
              src={"/assets/png/ipad.png"}
              width={60}
              height={60}
              alt="ipad"
              className="mt-96 mb-33"
            />
          </th>
          <td>
            <div className="d-flex flex-column mt-96 mb-33">
              <h6 className="text-dark fw-normal fs-6">2025-04-18</h6>
              <p className="text-secondary fw-normal display-2">00:12:40</p>
            </div>
          </td>
          <td>
            <p className="text-dark fw-normal fs-6 mt-96 mb-33">104.28.12.57</p>
          </td>
          <td>
            <p>
              <span className="fs-6 text-white fw-bold badge bg-success mt-96 mb-33 px-93 py-99">
                YES
              </span>
            </p>
          </td>
          <td>
            <p className="fs-6 text-dark fw-normal text-right">
              Bryar Pitts <br /> 5543 Aliquet St. <br /> Fort Dodge GA 20783
            </p>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <Image
              src={"/assets/png/imac.png"}
              width={60}
              height={60}
              alt="ipad"
              className="mt-96 mb-33"
            />
          </th>
          <td>
            <div className="d-flex flex-column mt-96 mb-33">
              <h6 className="text-dark fw-normal fs-6">2025-04-18</h6>
              <p className="text-secondary fw-normal display-2">00:12:40</p>
            </div>
          </td>
          <td>
            <p className="text-dark fw-normal fs-6 mt-96 mb-33">104.28.12.57</p>
          </td>
          <td>
            <p>
              <span className="fs-6 text-white fw-bold badge bg-danger mt-96 mb-33 px-93 py-99">
                NO
              </span>
            </p>
          </td>
          <td>
            <p className="fs-6 text-dark fw-normal text-right">
              Bryar Pitts <br /> 5543 Aliquet St. <br /> Fort Dodge GA 20783
            </p>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <Image
              src={"/assets/png/iPhone.png"}
              width={60}
              height={60}
              alt="ipad"
              className="mt-96 mb-33"
            />
          </th>
          <td>
            <div className="d-flex flex-column mt-96 mb-33">
              <h6 className="text-dark fw-normal fs-6">2025-04-18</h6>
              <p className="text-secondary fw-normal display-2">00:12:40</p>
            </div>
          </td>
          <td>
            <p className="text-dark fw-normal fs-6 mt-96 mb-33">104.28.12.57</p>
          </td>
          <td>
            <p>
              <span className="fs-6 text-white fw-bold badge bg-success mt-96 mb-33 px-93 py-99">
                YES
              </span>
            </p>
          </td>
          <td>
            <p className="fs-6 text-dark fw-normal text-right">
              Bryar Pitts <br /> 5543 Aliquet St. <br /> Fort Dodge GA 20783
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default LoginTable;

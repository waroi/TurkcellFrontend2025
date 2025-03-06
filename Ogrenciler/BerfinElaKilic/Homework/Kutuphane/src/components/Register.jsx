import { registerUser , SignIn} from "../services/Api";
import { useState } from "react";
import {NavLink} from 'react-router'

const Register = () => {
  const [user, setUser] = useState({ mail: "", password: "" });

  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          value={user.mail}
          onChange={(e) => setUser({ ...user, mail: e.target.value })}
          type="email"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group mb-3">
        <input
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
          @example.com
        </span>
      </div>

      <button onClick={() => registerUser(user.mail, user.password)}>
        Ekle
      </button>
      <NavLink to="/login">Log In</NavLink>
    </>
  );
};

export default Register;

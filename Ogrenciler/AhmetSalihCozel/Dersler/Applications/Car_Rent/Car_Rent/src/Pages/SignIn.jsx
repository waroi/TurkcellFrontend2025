import React, { useEffect, useState } from "react";
import {register} from "../Store/fireBase"
import { NavLink } from "react-router";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.userName.value;
    register(email,password,name)
  }
  return (
    <React.Fragment>
      <div className="d-flex h-100 w-100 align-items-center justify-content-center">
        <form className="w-50 d-flex justify-content-center flex-column" onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="userName" className="form-label">Name</label>
            <input name="userName" type="form-text" className="form-control" id="userName" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <div className="my-3">
            <NavLink to={"/login"}>Log In</NavLink>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SignIn;

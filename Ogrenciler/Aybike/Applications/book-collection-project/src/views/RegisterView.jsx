import React, { useState } from "react";
import { auth } from "../firebase/firebase";  
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const [error, setError] = useState("");  
  

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");  

    try {
     
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User signed up:", user);  
      alert("Kayıt başarılı!");
    } catch (error) {
      setError(error.message);  
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="text-center">Sign Up</h2>
            {error && <div className="alert alert-danger">{error}</div>}  
            <form onSubmit={handleSignUp}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

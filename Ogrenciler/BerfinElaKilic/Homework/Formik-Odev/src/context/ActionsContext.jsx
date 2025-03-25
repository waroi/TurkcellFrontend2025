import { createContext, useState, useEffect, useContext } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import {
  addAdmin,
  addCandidate,
  getAdmin,
  getCandidate,
} from "../utils/services";
import { useNavigate } from "react-router";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  return (
    <AuthContext.Provider
      value={{ jobs, applyJob, createJob, approveCandidate, statusChange }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useActions = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useActions  must be used within an AuthProvider");
  }
  return context;
};

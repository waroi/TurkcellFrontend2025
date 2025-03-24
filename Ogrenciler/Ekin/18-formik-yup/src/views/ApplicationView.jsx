import React from "react";
import useUserStore from "../store/useStore";
import ApplicationForm from "../components/ApplicationForm";

export default function ApplicationView() {
  const { user } = useUserStore();

  return (
    <div className="container">
      <h1 className="mb-5 fw-normal">Turkcell Atmosware Başvuru Formu</h1>
      <ApplicationForm user={user} />
    </div>
  );
}

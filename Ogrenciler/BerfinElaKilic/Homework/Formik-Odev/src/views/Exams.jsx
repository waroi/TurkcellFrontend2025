import React from "react";
import ExamManagement from "../components/molecules/forms/ExamCreationForm";
import ExamCreationForm from "../components/molecules/forms/ExamCreationForm";

const Exams = () => {
  return (
    <>
      <ExamCreationForm />
      <div>
        <h2>Oluşturduğum tüm sınavlar</h2>
        {/* <ExamCard/> */}//oluşturduğum tüm sınavlar burada maplenir, yeni
        oluştrudruğumda buraya eklenir
      </div>
    </>
  );
};

export default Exams;

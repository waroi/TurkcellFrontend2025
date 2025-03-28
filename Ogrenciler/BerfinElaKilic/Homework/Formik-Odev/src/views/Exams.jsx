import React from "react";
import ExamManagement from "../components/organisms/ExamCreationForm";
import ExamCreationForm from "../components/organisms/ExamCreationForm";
import DataRender from "../components/HOCS/DataRender";
import { getAllJobsQuiz } from "../utils/services";

const Exams = () => {
  const renderQuestionsData = (data) => {
    console.log("tüm sorular", data);
    if (!data) {
      return <p>Sınav oluşturma formu yükleniyor...</p>;
    } else {
      return <ExamCreationForm questions={data} />;
    }
  };

  return (
    <>
      <DataRender fetchFunction={getAllJobsQuiz} render={renderQuestionsData} />

      <div>
        <h2>Oluşturduğum tüm sınavlar</h2>
        {/* <ExamCard/> */}//oluşturduğum tüm sınavlar burada maplenir, yeni
        oluştrudruğumda buraya eklenir
      </div>
    </>
  );
};

export default Exams;

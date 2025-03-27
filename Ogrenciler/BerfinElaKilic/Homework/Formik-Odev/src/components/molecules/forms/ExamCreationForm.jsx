import CustomComponent from "../../atoms/CustomComponent";
import { Form, Formik } from "formik";
import { examSchema } from "../../../schemas";
import PrimaryButton from "../../atoms/Buttons/PrimaryButton";

// import {
//   CATEGORY,
//   SUBCATEGORY,
//   DIFFICULTY_LEVELS,
//   QUESTION_COUNT,
// } from "../../../constants/constants"; // Varsayılan olarak JSON'dan gelen veriler

const ExamCreationForm = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        category: "",
        subcategory: "",
        difficultyLevel: "",
        questionCount: 0,
      }}
      onSubmit={onSubmit}
      enableReinitialize={true}
      validationSchema={examSchema}
    >
      <Form className="">
        <div className="d-flex align-items-center justify-content-center">
          {" "}
          {/* Kategori */}
          <CustomComponent
            id="category"
            as="select"
            className="form-select mb-3"
            label="Kategori"
            name="category"
          >
            {/* <option defaultValue="">Kategori Seçiniz</option>
        {CATEGORY.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))} */}
          </CustomComponent>
          {/* Alt Kategori */}
          <CustomComponent
            id="subcategory"
            as="select"
            className="form-select mb-3"
            label="Alt Kategori"
            name="subcategory"
          >
            {/* <option defaultValue="">Alt Kategori Seçiniz</option>
        {SUBCATEGORY.map((subcategory) => (
          <option key={subcategory} value={subcategory}>
            {subcategory}
          </option>
        ))} */}
          </CustomComponent>
          {/* Zorluk Seviyesi */}
          <CustomComponent
            id="difficultyLevel"
            as="select"
            className="form-select mb-3"
            label="Zorluk Seviyesi"
            name="difficultyLevel"
          >
            {/* <option defaultValue="">Zorluk Seviyesi Seçiniz</option>
        {DIFFICULTY_LEVELS.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))} */}
          </CustomComponent>
          {/* Soru Sayısı */}
          <CustomComponent
            id="questionCount"
            as="select"
            className="form-select mb-3"
            label="Soru Sayısı"
            name="questionCount"
          >
            {/* <option defaultValue="">Soru Sayısını Seçiniz</option>
        {QUESTION_COUNT.map((count) => (
          <option key={count} value={count}>
            {count}
          </option>
        ))} */}
          </CustomComponent>
          {/* Ekle Butonu */}
          <PrimaryButton className="mt-4" label="Ekle">
            Ekle
          </PrimaryButton>
        </div>

        <CustomComponent
          id="relatedJob"
          as="select"
          className="form-select mb-3"
          label="İlgili İş İlanı"
          name="relatedJob"
        ></CustomComponent>
        {/* Submit Butonu */}
        <div className="mt-4">
          <PrimaryButton label="Sınavı Oluştur"> Kaydet</PrimaryButton>
        </div>
      </Form>
    </Formik>
  );
};

export default ExamCreationForm;

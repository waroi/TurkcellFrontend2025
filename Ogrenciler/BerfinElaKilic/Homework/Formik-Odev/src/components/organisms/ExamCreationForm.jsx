import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import CustomComponent from "../atoms/CustomComponent";
import PrimaryButton from "../atoms/Buttons/PrimaryButton";
import { examSchema } from "../../schemas";
import ExamSelection from "../molecules/forms/ExamSelection";
import { useAuth } from "../../context/AuthContext";
import { postExam } from "../../utils/services";

const ExamCreationForm = ({ questions }) => {
  const { user } = useAuth();
  const [maxQuestionCount, setMaxQuestionCount] = useState(10);
  const [jobsCreatedByMe, setJobsCreatedByMe] = useState([]);
  const [selection, setSelection] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch jobs created by the admin
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/admins/${user.id}?_embed=jobs`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const userWithEmbed = await response.json();
        setJobsCreatedByMe(userWithEmbed.jobs || []);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load job listings");
      }
    };

    fetchJobs();
  }, [user.id]);

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const getQuestionsForSelection = async (selection) => {
    try {
      const queryParams = new URLSearchParams({
        category: selection.category,
        subcategory: selection.subcategory,
        difficultyLevel: selection.difficultyLevel,
      });

      const response = await fetch(
        `http://localhost:3000/questions?${queryParams}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch questions");
      }
      const questions = await response.json();
      return shuffleArray(questions).slice(0, selection.questionCount);
    } catch (err) {
      console.error("Error fetching questions:", err);
      setError("Failed to load questions");
      return [];
    }
  };

  const createExamFromMultipleSelections = async (selectionsArray) => {
    try {
      const allQuestions = await Promise.all(
        selectionsArray.map((selection) => getQuestionsForSelection(selection))
      );

      const mergedQuestions = shuffleArray(allQuestions.flat());

      return {
        createdAt: new Date().toISOString(),
        selections: selectionsArray,
        questions: mergedQuestions.map((q) => q.id),
        questionDetails: mergedQuestions,
      };
    } catch (error) {
      console.error("Sınav oluşturulurken hata:", error);
      throw error;
    }
  };

  const onSubmit = async (values, actions) => {
    setIsLoading(true);
    setError(null);

    try {
      const examQuestions = await createExamFromMultipleSelections(selection);

      const exam = {
        createdAt: new Date().toISOString(),
        title: values.title,
        questions: examQuestions.questions,
        totalDuration: 5 * examQuestions.questions.length,
        jobId: values.relatedJob,
        adminId: user.id,
        questionDetails: examQuestions.questionDetails,
      };

      const response = await postExam(exam);
      console.log("Exam created successfully:", response);

      actions.resetForm();
      setSelection([]);
    } catch (err) {
      console.error("Error submitting exam:", err);
      setError("Failed to create exam. Please try again.");
    } finally {
      setIsLoading(false);
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        title: "",
        relatedJob: "",
        category: "",
        subcategory: "",
        difficultyLevel: "",
        questionCount: 0,
        maxQuestionCount: maxQuestionCount,
      }}
      onSubmit={onSubmit}
      validationSchema={examSchema}
    >
      {({ isSubmitting }) => (
        <Form className="">
          {error && <div className="alert alert-danger">{error}</div>}

          <CustomComponent
            id="title"
            as="input"
            className="mb-3"
            label="Sınav adı"
            name="title"
            required
          />

          <CustomComponent
            id="relatedJob"
            as="select"
            className="form-select mb-3"
            label="İlgili İş İlanı"
            name="relatedJob"
            required
          >
            <option value="">İş ilanı seçiniz</option>
            {jobsCreatedByMe.map((job) => (
              <option key={job.id} value={job.id}>
                {job.position} - {job.company}
              </option>
            ))}
          </CustomComponent>

          <ExamSelection
            questions={questions}
            maxQuestionCount={maxQuestionCount}
            setMaxQuestionCount={setMaxQuestionCount}
            setSelection={setSelection}
            selection={selection}
          />

          <div className="mt-4">
            <PrimaryButton
              type="submit"
              disabled={isSubmitting || isLoading || selection.length === 0}
            >
              {isLoading ? "Oluşturuluyor..." : "Sınavı Oluştur"}
            </PrimaryButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ExamCreationForm;

import { useParams } from "react-router-dom";

import Questions from "#/exam/Questions";

export default function Exam() {
  const { id } = useParams();

  return (
    <div className="container">
      <Questions id={id} />
    </div>
  );
}

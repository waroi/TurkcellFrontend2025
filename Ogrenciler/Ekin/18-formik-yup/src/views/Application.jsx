import { useParams } from "react-router-dom";

import Form from "#/form/Form";

export default function Application() {
  const { id } = useParams();

  return (
    <div className="container">
      <Form id={id} />
    </div>
  );
}

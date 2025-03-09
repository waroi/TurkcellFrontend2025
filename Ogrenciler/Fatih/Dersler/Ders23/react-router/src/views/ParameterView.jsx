import { useParams } from "react-router";

const ParameterView = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Gelen Parametre: {id}</h1>
    </div>
  );
};

export default ParameterView;

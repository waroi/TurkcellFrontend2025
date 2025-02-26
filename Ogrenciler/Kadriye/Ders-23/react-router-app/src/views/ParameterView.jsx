import { useParams } from "react-router";
const ParameterView = () => {
  const { id } = useParams();
  return <div>Gelen Parametre: {id}</div>;
};
export default ParameterView;

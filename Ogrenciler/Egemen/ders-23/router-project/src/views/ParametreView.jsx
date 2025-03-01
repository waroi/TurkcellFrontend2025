import { useParams } from "react-router";
const ParametreView = () => {
  const { id } = useParams();
  return <div>Gelen Parameatre : {id} </div>;
};

export default ParametreView;

import { useParams } from "react-router";

function ParametreView() {
	const { id } = useParams();
	return <div>Gelen parametre : {id}</div>;
}

export default ParametreView;

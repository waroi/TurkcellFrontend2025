import JobDetailPage from "../components/atoms/cards/JobDetail";
import DataRender from "../components/HOCS/DataRender";
import { getJobById } from "../utils/services";
import {useParams} from 'react-router'

const JobDetail = () => {
  const { id } = useParams();
  const renderJobData = (data) => {
    console.log("data", data);
    if (!data) {
      return <p>Loading...</p>;
    }

    return <div><JobDetailPage key={data.id} job={data}/></div>;
  };
  return (
    <div>
      <DataRender id={id} fetchFunction={getJobById} render={renderJobData} />
    </div>
  );
};

export default JobDetail;

import DataRender from "../components/HOCS/DataRender";
import { getJobById } from "../utils/services";

const JobDetail = () => {
  const id = "1";
  const renderJobData = (data) => {
    console.log("data", data);
    if (!data) {
      return <p>Loading...</p>;
    }

    return <div>"hello"</div>;
  };
  return (
    <div>
      JobDetail
      <DataRender id={id} fetchFunction={getJobById} render={renderJobData} />
    </div>
  );
};

export default JobDetail;

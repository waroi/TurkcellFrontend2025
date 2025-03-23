import DataRender from "../components/HOCS/DataRender";
import { getAllJobs } from "../utils/services";
import JobCard from "../components/atoms/cards/JobCard";
import {useAuth} from '../context/AuthContext';

const AllJobs = () => {
    const { user } = useAuth();
  const renderJobsData = (data) => {
    console.log("data", data);
    if (!data) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h2>İş İlanları</h2>
          <div className="row">
            {data.map((job) => (
              <JobCard key={job.id} job={job} user={user}/>
            ))}
          </div>
      </div>
    );
  };
  return (
    <>
      <DataRender fetchFunction={getAllJobs} render={renderJobsData} />
    </>
  );
};

export default AllJobs;

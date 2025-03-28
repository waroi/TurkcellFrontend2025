import DataRender from "../components/HOCS/DataRender";
import { getAllJobs, getAllJobsWithExams } from "../utils/services";
import JobCard from "../components/atoms/cards/JobCard";
import { useAuth } from "../context/AuthContext";

const AllJobs = ({ title = "İş İlanları", limit }) => {
  const { user } = useAuth();

  const renderJobsData = (data) => {
    if (!data) {
      return <p>Loading...</p>;
    }
    console.log("jobs,", data);
    const limitedData = limit ? data.slice(0, limit) : data;
    return (
      <div>
        <h2>{title}</h2>
        <div className="row">
          {limitedData.map((job) => (
            <JobCard key={job.id} job={job} user={user} />
          ))}
        </div>
      </div>
    );
  };
  return (
    <>
      <DataRender fetchFunction={getAllJobsWithExams} render={renderJobsData} />
    </>
  );
};

export default AllJobs;

import DataRender from "../components/HOCS/DataRender";
import { getAllJobs } from "../utils/services";
import JobCard from "../components/atoms/cards/JobCard";
import { useAuth } from "../context/AuthContext";

const AllJobs = ({ title = "İş İlanları", limit }) => {
  const { user } = useAuth();
  console.log("user from jobs", user);
  const renderJobsData = (data) => {
    console.log("data", data);
    if (!data) {
      return <p>Loading...</p>;
    }
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
      <DataRender fetchFunction={getAllJobs} render={renderJobsData} />
    </>
  );
};

export default AllJobs;

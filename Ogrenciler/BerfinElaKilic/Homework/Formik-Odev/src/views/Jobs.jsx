import { Outlet } from "react-router";
import DataRender from "../components/HOCS/DataRender";
import { getAllJobs } from "../utils/services";
import JobCard from "../components/atoms/cards/JobCard";

const Jobs = () => {
  const renderJobsData = (data) => {
    console.log("data", data);
    if (!data) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h2>İş İlanları</h2>
        <JobCard />
      </div>
    );
  };
  return (
    <>
      <DataRender fetchFunction={getAllJobs} render={renderJobsData} />
      <Outlet />
    </>
  );
};

export default Jobs;

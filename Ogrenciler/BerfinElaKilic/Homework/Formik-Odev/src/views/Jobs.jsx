import { Outlet } from "react-router";
import DataRender from "../components/HOCS/DataRender";
import { getAllJobs } from "../utils/services";

const Jobs = () => {
  const renderJobsData = (data) => {
    console.log("data", data);
    if (!data) {
      return <p>Loading...</p>;
    }

    return <div>"hello"</div>;
  };
  return (
    <>
      <DataRender fetchFunction={getAllJobs} render={renderJobsData} />
      <Outlet />
    </>
  );
};

export default Jobs;

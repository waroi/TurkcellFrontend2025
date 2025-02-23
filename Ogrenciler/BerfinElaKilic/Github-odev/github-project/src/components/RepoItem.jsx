import SplitButton from "./atoms/SplitButton";

const RepoItem = ({ repoItem }) => {
  console.log("fromITem", repoItem);
  return (
    <div className="border-top border-bottom">
      {/* <div>
        {" "}
        <h1 className="fw-bold"> title</h1>
        <p className="text-secondary">description</p>
        <div clasName="tags d-flex gap-2 align-items-center "></div>
        <div className="d-flex align-items-center gap-2 ">
          <div>Typescript</div>
          <div>
            <span>sembol</span>1
          </div>
          <div>created_at</div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <SplitButton />
      </div> */}
    </div>
  );
};

export default RepoItem;

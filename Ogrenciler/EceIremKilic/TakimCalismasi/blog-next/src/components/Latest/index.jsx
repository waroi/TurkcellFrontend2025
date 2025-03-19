"use client";
import Loading from "../Loading";
import Card from "../Card";
import Title from "./atoms/title";
import useLatestPost from "@/hooks/useLatestPost";
const Latest = () => {
  const { filtredItem, isMounted } = useLatestPost();
  if (!isMounted) {
    return <Loading />;
  }
  return (
    <div className="container" id="latest">
      <Title title={"Son Yayımlanan Bloglar"} />
      <div className="row">
        {filtredItem?.map((blog) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex align-items-stretch"
            key={blog.id}
          >
            <Card blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;

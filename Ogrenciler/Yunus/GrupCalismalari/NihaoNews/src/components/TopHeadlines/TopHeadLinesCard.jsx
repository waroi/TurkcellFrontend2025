import { NavLink } from "react-router";

const TopHeadLinesCard = ({ item }) => {
  const defaultImgUrl = "/src/assets/default.jpg";
  return (
    <NavLink
      to={`/news/${item.id}`}
      className="d-flex p-3 rounded shadow-sm gap-2"
    >
      <div className="top-headlines-img">
        <img
          src={item.urlToImage}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = defaultImgUrl;
          }}
          className="img-fluid h-100 w-100 object-fit-cover"
          alt={item.title}
        />
      </div>
      <div className="d-flex flex-column justify-content-start">
        <h5 className="fs-6">
          {item.title}
        </h5>
        <p className="text-muted text-end pb-0">
          {item.publishedAt ? new Date(item.publishedAt).toLocaleDateString("tr-TR") : ""}
        </p>
      </div>
    </NavLink>
  );
};

export default TopHeadLinesCard;
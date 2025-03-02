import { useOutletContext } from "react-router";
import NewsItem from "./NewsItem";

function NewsList({ news: propNews }) {
  const outletContext = useOutletContext();
  const news = propNews || outletContext?.news || [];
  return (
    <div className="row">
      {news.length > 0 ? (
        news.map((item, index) => <NewsItem key={index} news={item} />)
      ) : (
        <p>Haber bulunamadı.</p>
      )}
    </div>
  );
}

export default NewsList;

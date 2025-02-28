import NewsItem from "./NewsItem";

function NewsList({ news }) {
    return (
        <div className="row">
            {news.length > 0 ? (
                news.map((item, index) => <NewsItem key={index} news={item} />)
            ):(
                <p>Haber bulunamadı.</p>
            )}
        </div>
    );
}

export default NewsList;

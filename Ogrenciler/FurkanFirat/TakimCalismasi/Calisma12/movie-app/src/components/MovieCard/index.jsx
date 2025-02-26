import styles from "./MovieCard.module.css";

// const OverviewText = styled.p`
//   display: -webkit-box;
//   -webkit-line-clamp: 2; /* Maksimum 2 satır */
//   -webkit-box-orient: vertical;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

// const MovieTitle = styled.a`
//   text-decoration: none;
//   transition: all 0.2s ease-in-out;
//   &:hover {
//     color: #666;
//     text-decoration: underline;
//     transition: all 0.2s ease-in-out;
//   }
// `;

const detailURL = "https://www.themoviedb.org/movie";
function formatDate(dateStr) {
  if (!dateStr) return "Tarih bilinmiyor";
  const date = new Date(dateStr + "T00:00:00");
  if (isNaN(date.getTime())) return "Geçersiz tarih";

  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default function MovieCard({ Movie, imgURL }) {
  const defaultPoster =
    "https://github.com/furkan-firat/cinecalm/blob/main/public/defaultPoster.jpg?raw=true";

  return (
    <>
    <div className="card mb-3 w-100">
      <div className="row g-0">
        <div className="col-md-2">
          <img
            src={Movie.poster_path ? `${imgURL}${Movie.poster_path}` : defaultPoster}
            className="img-fluid rounded-start"
            alt={Movie.original_title + " poster"}
            loading="lazy"
          />
        </div>
        <div className="col-md-10">
          <div className="card-body d-flex flex-column justify-content-between h-100">
            <a
              href={`${detailURL}/${Movie.id}`}
              className={`card-title ${styles.movieTitle}`}
            >
              <h5>{Movie.original_title}</h5>
            </a>
            <p className={styles.overviewText}>{Movie.overview}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {formatDate(Movie.release_date)}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

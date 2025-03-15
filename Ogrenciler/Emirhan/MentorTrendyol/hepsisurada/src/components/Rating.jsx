/* eslint-disable react/prop-types */
const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<i key={i} className="fa-solid fa-star text-warning"></i>); // Dolu yıldız
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(
        <i key={i} className="fa-solid fa-star-half-stroke text-warning"></i>
      ); // Yarım yıldız
    } else {
      stars.push(<i key={i} className="fa-regular fa-star text-warning"></i>); // Boş yıldız
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;

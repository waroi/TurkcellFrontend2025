const Card = ({ card }) => {
  return (
    <>
      <div className="card text-bg-dark">
        <img src={card.image} className="card-img" alt="card_img" />
        <div className="card-img-overlay">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.body}</p>
          <p className="card-text">
            <small>{card.created_at}</small>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;

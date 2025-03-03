import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const NewsCard = (news) => {
  const handleClick = () => {
    window.open(news.url, "_blank");
  };

  return (
    <Col
      md={4}
      sm={6}
      xs={12}
      className="mb-4 mt-4 d-flex justify-content-center align-items-center"
    >
      <Card style={{width: "18rem"}}>
        <Card.Img
          variant="top"
          src={news.image}
          style={{width: "100%", height: "200px", objectFit: "cover"}}
          onClick={handleClick}
        />
        <Card.Body>
          <Card.Title>{news.name.substring(0, 25) + "..."}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NewsCard;

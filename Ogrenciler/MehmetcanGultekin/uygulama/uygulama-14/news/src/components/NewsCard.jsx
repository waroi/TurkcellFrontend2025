import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const NewsCard = (news) => {
  return (
    <Col md={4}>
      <Card style={{width: "18rem"}}>
        <Card.Img variant="top" src={news.image} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
        <Card.Body>
          <Card.Title>{news.name.substring(0, 15) + "..."}</Card.Title>
          <Button variant="primary" href={news.url}>
            Habere git
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NewsCard;

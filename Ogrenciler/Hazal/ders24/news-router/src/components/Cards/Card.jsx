import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
    return (
        <Col md={6}>
            <Card>
                <Card.Img variant="top" src={news.urlToImage} />
                <Card.Body>
                    <Card.Title>{news.title}</Card.Title>
                    <Card.Text>{news.description}</Card.Text>
                    <Card.Link as={Link} to={`/news/${news.id}`}>Habere Git</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default NewsCard;
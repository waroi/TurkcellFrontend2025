import React from 'react';
import { Card} from 'react-bootstrap';

const NewsCard =({ newsItem }) => {
    return (
        <Card className='h-100'>
          <Card.Img variant="top" src={newsItem?.urlToImage} />
          <Card.Body>
            <Card.Title>{newsItem?.title}</Card.Title>
            <Card.Text>{newsItem?.description}</Card.Text>
            <Card.Link className='btn btn-primary' href={newsItem?.url} target="_blank" rel="noopener noreferrer">Read More</Card.Link>
          </Card.Body>
        </Card>
    );
  }
  
  export default NewsCard;
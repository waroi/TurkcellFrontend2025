import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const NewsCard = (news) => {
  return (
    <Col md={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={news.image} />
      <Card.Body>
        <Card.Title >{news.name.substring(0, 15) + "..."}</Card.Title>
        <Card.Text className='text-start'>
            {news.description.substring(0, 85) + "..."}
        </Card.Text>
        <Button variant="primary" href = {news.url}>Habere git</Button>
      </Card.Body>
    </Card>
    </Col>
      

    
  )
}

export default NewsCard
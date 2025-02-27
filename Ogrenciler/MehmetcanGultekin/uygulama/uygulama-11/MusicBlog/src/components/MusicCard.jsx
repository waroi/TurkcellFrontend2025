import React from 'react'
import { Badge, Card } from 'react-bootstrap'

function MusicCard({ id, img, title, description, category }) {
    
    
    return (
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Badge bg="secondary">{category}</Badge>
            </Card.Body>
           
        </Card>
    )
    
}
export default MusicCard
import React from 'react'
import { Badge, Card, Button } from 'react-bootstrap'

function MusicCard({ id, img, title, description, category,author,authorImg, onDelete, onUpdate }) {
    
    const handleDelete = () => {
        if (onDelete) onDelete(id);
    };
    
    const handleUpdate = () => {
        if (onUpdate) onUpdate(id);
    };
    
    return (
        <Card className='h-100 shadow-sm'>
            <Card.Img 
                variant="top" 
                src={img} 
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{title}</Card.Title>
                <Card.Text className="flex-grow-1">{description}</Card.Text>
                <Badge bg="secondary" className="mb-2">{category}</Badge>
                
                <div className="d-flex justify-content-between align-items-center mt-auto mb-2">
                    <Button variant="outline-primary" size="sm" onClick={handleUpdate}>Update</Button>
                    <Button variant="outline-danger" size="sm" onClick={handleDelete}>Delete</Button>
                </div>
            </Card.Body>
            <Card.Footer className="bg-white border-top-0">
                <div className="d-flex align-items-center">
                    <img 
                        style={{ 
                            borderRadius: '50%', 
                            marginRight: '10px',
                            objectFit: 'cover' 
                        }} 
                        width="30px" 
                        height="30px" 
                        src={authorImg} 
                        alt={author} 
                    />
                    <small className="text-muted">{author}</small>
                </div>
            </Card.Footer>
        </Card>
    )
    
}
export default MusicCard
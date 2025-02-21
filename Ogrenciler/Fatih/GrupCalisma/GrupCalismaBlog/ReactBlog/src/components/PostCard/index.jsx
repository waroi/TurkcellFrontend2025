import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './style.css';

function PostCard(props) {
  return (
    <Card className='post-card shadow-lg'>
      <Card.Img variant='top' src={props.data.resimUrl} className='post-image' />
      <Card.Body>
        <Card.Title className='post-title'>{props.data.baslik}</Card.Title>
        <Card.Text className='post-text'>{props.data.icerik}</Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroup.Item className='post-author'>{props.data.yazar}</ListGroup.Item>
        <ListGroup.Item className='post-date'>{props.data.yayinTarihi}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default PostCard;

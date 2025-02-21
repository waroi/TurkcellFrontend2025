import { Card, Image, ListGroup } from 'react-bootstrap';

const SideBar = ({ user }) => {
  return (
    <Card className='sticky-top p-3 shadow-sm'>
      <div className='text-center mb-3'>
        <Image
          className='user-image'
          src={user.image}
          alt='Profile Image'
          roundedCircle
          fluid
        />
      </div>

      <div className='text-center mb-3'>
        <h5 className='mb-1'>{user.name}</h5>
        <p className='text-muted mb-0'>{user.email}</p>
      </div>

      <h6 className='mb-2'>Interests</h6>
      <ListGroup as='ul'>
        {user.interests?.map((interest, index) => (
          <ListGroup.Item as='li' key={index} className='  p-1 text-muted'>
            {interest}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default SideBar;

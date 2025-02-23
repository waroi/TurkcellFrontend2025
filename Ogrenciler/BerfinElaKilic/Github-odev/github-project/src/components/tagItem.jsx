import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const TagItem = ({ tag }) => {
    return (
        <>
            <Badge bg="warning" className='me-1' text="dark">
                {tag}
            </Badge>
        </>
    )
}

export default TagItem
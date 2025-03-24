import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';

export const ApplicationRow = ({ application, index, onView, onDelete }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {application.fullName ||
          `${application.firstName} ${application.lastName}`}
      </td>
      <td>{application.email}</td>
      <td>{application.phone}</td>
      <td>
        {application.timestamp?.toDate
          ? application.timestamp.toDate().toLocaleDateString('en-US')
          : 'Not Provided'}
      </td>
      <td>
        <Badge status={application.status} />
      </td>
      <td>
        <Button
          variant='info'
          size='sm'
          className='me-2'
          onClick={() => onView(application)}
        >
          View
        </Button>
        <Button
          variant='danger'
          size='sm'
          onClick={() => onDelete(application.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

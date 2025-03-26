import { useState } from 'react';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { ExamContentModal } from '../organisms/ExamContentModal';

export const ApplicationRow = ({ application, index, onView, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
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
            className='me-2'
            size='sm'
            onClick={() => onDelete(application.id)}
          >
            Delete
          </Button>
          {application.status === 'approved' && (
            <Button
              variant='warning'
              size='sm'
              onClick={() => setIsModalOpen(true)}
            >
              Send Exam
            </Button>
          )}
        </td>
      </tr>
      <ExamContentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

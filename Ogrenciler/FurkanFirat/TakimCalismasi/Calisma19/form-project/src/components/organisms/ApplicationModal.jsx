import { Button } from '../atoms/Button';
import { ApplicationDetailItem } from '../molecules/ApplicationDetailItem';

export const ApplicationModal = ({
  application,
  onClose,
  onApprove,
  onReject,
  actionLoading,
}) => {
  if (!application) return null;

  const handleApprove = (e) => {
    e.preventDefault();
    onApprove(application.id);
  };

  const handleReject = (e) => {
    e.preventDefault();
    onReject(application.id);
  };

  return (
    <div
      className='modal fade show d-block text-secondary'
      tabIndex='-1'
      style={{ background: 'rgba(0,0,0,0.5)' }}
    >
      <div className='modal-dialog modal-lg'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Application Details</h5>
            <Button
              type='button'
              className='btn-close'
              onClick={onClose}
            ></Button>
          </div>
          <div className='modal-body'>
            <h4>
              {application.fullName ||
                `${application.firstName} ${application.lastName}`}
            </h4>
            <ApplicationDetailItem label='Email' value={application.email} />
            <ApplicationDetailItem label='Phone' value={application.phone} />
            <ApplicationDetailItem label='Status' value={application.status} />
          </div>
          <div className='modal-footer'>
            {application.status !== 'approved' && (
              <Button
                variant='success'
                onClick={handleApprove}
                disabled={actionLoading}
              >
                {actionLoading ? 'Processing...' : 'Approve'}
              </Button>
            )}
            {application.status !== 'rejected' && (
              <Button
                variant='danger'
                onClick={handleReject}
                disabled={actionLoading}
              >
                {actionLoading ? 'Processing...' : 'Reject'}
              </Button>
            )}
            <Button variant='secondary' onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

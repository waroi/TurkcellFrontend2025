import { ApplicationRow } from '../molecules/ApplicationRow';

export const ApplicationsTable = ({
  applications,
  onViewApplication,
  onDeleteApplication,
}) => {
  if (applications.length === 0) {
    return (
      <div className='text-center p-4'>
        <h4>No applications yet.</h4>
      </div>
    );
  }

  return (
    <table className='table table-striped table-bordered table-hover'>
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Application Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {applications.map((app, index) => (
          <ApplicationRow
            key={app.id}
            application={app}
            index={index}
            onView={onViewApplication}
            onDelete={onDeleteApplication}
          />
        ))}
      </tbody>
    </table>
  );
};

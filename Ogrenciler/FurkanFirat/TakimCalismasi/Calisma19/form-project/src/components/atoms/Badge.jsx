export const Badge = ({ status }) => {
  const badgeColor =
    status === 'approved'
      ? 'success'
      : status === 'rejected'
      ? 'danger'
      : 'warning';

  const badgeText =
    status === 'approved'
      ? 'Approved'
      : status === 'rejected'
      ? 'Rejected'
      : 'Pending';

  return <span className={`badge bg-${badgeColor}`}>{badgeText}</span>;
};

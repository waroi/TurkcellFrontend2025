export const Badge = ({ status }) => {
  const badgeColor =
    status === 'approved' || status === 'exam passed'
      ? 'success'
      : status === 'rejected' || status === 'exam failed'
      ? 'danger'
      : 'warning';

  const badgeText =
    status === 'approved'
      ? 'Approved'
      : status === 'rejected'
      ? 'Rejected'
      : status === 'exam passed'
      ? 'Exam Passed'
      : status === 'exam failed'
      ? 'Exam Failed'
      : 'Pending';

  return <span className={`badge bg-${badgeColor}`}>{badgeText}</span>;
};

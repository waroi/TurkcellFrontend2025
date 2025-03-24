import { Link } from 'react-router';

export const RedirectLink = ({ textContent, linkText, to, className }) => {
  return (
    <p className={className}>
      {textContent}{' '}
      <Link to={to} className='text-primary'>
        {linkText}
      </Link>
    </p>
  );
};

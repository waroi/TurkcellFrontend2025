import { Link } from 'react-router';

export const RedirectLink = ({ textContent, linkText, to }) => {
  return (
    <p className='text-center text-muted mt-3'>
      {textContent}{' '}
      <Link to={to} className='text-primary'>
        {linkText}
      </Link>
    </p>
  );
};

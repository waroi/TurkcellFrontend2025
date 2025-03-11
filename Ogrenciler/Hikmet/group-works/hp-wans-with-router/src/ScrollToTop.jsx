import { useEffect } from 'react';
import { useLocation } from 'react-router';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default ScrollToTop;

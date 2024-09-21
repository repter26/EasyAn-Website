import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantly to the top of the page when the pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'  // Set behavior to 'auto' to avoid smooth scrolling
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

export default function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    scroll.scrollToTop({
      duration: 500, // Duration of the scroll animation
      smooth: 'easeInOutQuad' // Easing function for the animation
    });
  }, [pathname]);

  return null;
}
 

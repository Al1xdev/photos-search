import React, { useEffect, useState } from 'react';

import './scroll.css';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <div className="scroll-wrapper">
          <button onClick={scrollToTop} className="btn-top">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976314 8.31658 0.292893 8.70711C0.683417 9.09763 1.31658 9.09763 1.70711 8.70711L7 3.41421L7 15C7 15.5523 7.44772 16 8 16C8.55229 16 9 15.5523 9 15L9 3.41421L14.2929 8.70711C14.6834 9.09763 15.3166 9.09763 15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L8.70711 0.292893C8.31658 -0.0976318 7.68342 -0.0976318 7.29289 0.292893L0.292893 7.29289Z"
                fill="#828282"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;

import React, { useEffect, useState } from "react";

const LoadingContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={`loading-container ${isLoading ? "" : "hideLiodingPage"}`} id="loading-container">
          <svg width="100vw" id="loading-svg-logo">
            <text x="50%" y="50%" id="loading-text">
              Karan Padhiyar
            </text>
          </svg>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default LoadingContainer;

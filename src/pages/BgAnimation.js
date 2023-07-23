import React, { useEffect } from "react";
import "../assets/CSS/style.css";
// import { hsl } from "d3";

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const BgAnimation = () => {
  useEffect(() => {
    const $wrapper = document.querySelector(".wrapper");
    const numCircles = 15; // Number of circles
    const animationDuration = 4; // Animation duration in seconds

    const createRandomCircle = () => {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.style.backgroundColor = "#888";
      circle.style.animation = `animate ${animationDuration}s ${getRandomNumber(0, animationDuration)}s linear infinite`;

      const wrapperWidth = $wrapper.clientWidth;
      const wrapperHeight = $wrapper.clientHeight;
      const left = getRandomNumber(0, wrapperWidth);
      const top = getRandomNumber(0, wrapperHeight);

      circle.style.left = `${left}px`;
      circle.style.top = `${top}px`;

      return circle;
    };

    for (let i = 0; i < numCircles; i++) {
      const circle = createRandomCircle();
      $wrapper.appendChild(circle);
    }
  }, []);

  return (
    <div className="wrapper">
      {/** Circles will be dynamically added in this div */}
    </div>
  );
};

export default BgAnimation;

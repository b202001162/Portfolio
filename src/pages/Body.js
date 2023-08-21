import React, { useEffect, useState, useRef } from "react";
import LibManSysSlideContent from "./LibManSysSlideContent";
import FileManSysSlideContent from "./FileManSysSlideContent";
import { select, mouse, hsl } from "d3";
import "../assets/CSS/style.css";

// import Img2 from "../assets/IMG/data-recovery.png";

const Body = () => {
  let width = "100%";
  let height = "100%";

  const [isLoading, setIsLoading] = useState(true);
  const wrapperRef = useRef(null); // Ref for the wrapper element

  useEffect(() => {
    // Simulate a 5-second loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (isLoading) return; // Don't run the D3 code when isLoading is false

    const svg = select("#svg-particles-mouse")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const particle = () => {
      let m = mouse(svg.node());

      svg
        .insert("circle", "rect")
        .attr("cx", m[0])
        .attr("cy", m[1])
        .attr("r", 1) // 1e-6
        .style("stroke", hsl(0, 0, 0.6))
        .style("stroke-opacity", 1)
        .transition()
        .duration(1000)
        .ease(Math.sqrt)
        .attr("r", 20)
        .style("stroke-opacity", 1e-6)
        .style("stroke-width", 40)
        .remove();
    };

    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);
  });

  useEffect(() => {
    const handleScroll = () => {
      const $window = window;
      const $body = document.querySelector("body");
      const $panels = document.querySelectorAll(".panel");
      const scroll = $window.scrollY + $window.innerHeight / 3;

      $panels.forEach((panel) => {
        const panelTop = panel.getBoundingClientRect().top + $window.scrollY;
        const panelBottom = panelTop + panel.offsetHeight;

        if (panelTop <= scroll && panelBottom > scroll) {
          // Remove all classes on body with color-
          $body.classList.remove(
            ...Array.from($body.classList).filter((cls) =>
              cls.startsWith("color-")
            )
          );

          // Add class of currently active div
          $body.classList.add("color-" + panel.dataset.color);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const $wrapper = wrapperRef.current; // Access the wrapper element using the ref
    if (!$wrapper) return; // Check if the wrapper element is available

    const numCircles = 15; // Number of circles
    const animationDuration = 4; // Animation duration in seconds

    const createRandomCircle = () => {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.style.backgroundColor = "#888";
      circle.style.animation = `animate ${animationDuration}s ${getRandomNumber(
        0,
        animationDuration
      )}s linear infinite`;

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
  }, [isLoading]); // Trigger the circle creation when isLoading changes

  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div
          className={`main-ctn ${isLoading ? "" : "canSeeMainCtn"}`}
          id="main-ctn"
        >
          <div className="panel wrapper" data-color="white" ref={wrapperRef}>
            <div id="svg-particles-mouse">
              <span className="intro-text-title">
                Hi! I&apos;m Karan. <br />
                <span className="intro-text-subtitle">
                  A software developer and designer who loves to create products
                  that make a difference.
                </span>
              </span>
              <span className="scroll-down-text">Scroll down</span>
              <div className="vertical-line-at-scroll-down">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="scroll-icon-svg"
                >
                  <path d="M7 20l5-5 5 5" />
                  <path d="M7 4l5 5 5-5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="panel" data-color="lib-man-sys">
            <LibManSysSlideContent />
          </div>
          <div className="panel" data-color="file-man-sys">
            <FileManSysSlideContent />
          </div>
        </div>
      )}
    </>
  );
};

export default Body;

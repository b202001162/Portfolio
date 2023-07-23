import React, { useEffect, useState } from "react";
import { select, mouse, hsl } from "d3";
import "../assets/CSS/style.css";

const Body = () => {
  let width = "100%";
  let height = "100%";

  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div
          className={`main-ctn ${isLoading ? "" : "canSeeMainCtn"}`}
          id="main-ctn"
        >
          <div className="panel" data-color="white">
            <div id="svg-particles-mouse">
              <p className="intro-text-title">
                Hi! I'm Karan. <br />
                <p className="intro-text-subtitle">
                  {" "}
                  A software developer and designer who loves to create products
                  that make a difference.{" "}
                </p>
              </p>
            </div>
          </div>
          <div className="panel" data-color="yellow"></div>
        </div>
      )}
    </>
  );
};

export default Body;

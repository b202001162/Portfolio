import React, { useEffect } from "react";
import "../assets/CSS/style.css";

const ChangeBg = () => {
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
      <div className="panel" data-color="white">
        <div>
          <h1>Magic scrolling colours</h1>
          <p>Scroll to animate the background colour of the body as a full height panel becomes visible.</p>
          <p>I have tried to comment the code, particularly the JavaScript, as much as possible. I hope it&apos;s clear to understand.</p>
          <p>If you have any questions, my twitter is <a href="https://twitter.com/daveredfern">@daveredfern</a>.</p>
        </div>
      </div>
      <div className="panel" data-color="violet">
        <h2>Violet panel</h2>
      </div>
      <div className="panel" data-color="indigo">
        <h2>Indigo panel</h2>
      </div>
      <div className="panel" data-color="blue">
        <h2>Blue panel</h2>
      </div>
      <div className="panel" data-color="green">
        <h2>Green panel</h2>
      </div>
      <div className="panel" data-color="yellow">
        <h2>Yellow panel</h2>
      </div>
      <div className="panel" data-color="orange">
        <h2>Orange panel</h2>
      </div>
      <div className="panel" data-color="red">
        <h2>Red panel</h2>
      </div>
      <div className="panel" data-color="new">
        <h2>White panel</h2>
      </div>
    </>
  );
};

export default ChangeBg;

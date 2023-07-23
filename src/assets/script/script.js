// $(document).ready(function () { 
//     // console.log("Document is ready");
//     // delay(5000);

// });


document.addEventListener("DOMContentLoaded", function() {
    // Select the element to remove display: none
    const element = document.getElementById("loading-container");

    // Wait for 5 seconds and then remove the "hidden" class
    setTimeout(() => {
        element.classList.add("hidden");
        document.getElementById("main-ctn").classList.add("visible");
    }, 4600); // 5000 milliseconds = 5 seconds
});



// For particles

let width = "100%",
    height = "100%";

let i = 0;

let svg = d3.select("#svg-particles-mouse").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

function particle() {
  let m = d3.mouse(this);

  svg.insert("circle", "rect")
      .attr("cx", m[0])
      .attr("cy", m[1])
      .attr("r", 1) // 1e-6
      .style("stroke", d3.hsl(100, .1, .6))
      .style("stroke-opacity", 1)
    .transition()
      .duration(1000)
      .ease(Math.sqrt)
      .attr("r", 20)
      .style("stroke-opacity", 1e-6)
    	.style("stroke-width", 40)
      .remove();

  d3.event.preventDefault();
}

// ---------------------------------------
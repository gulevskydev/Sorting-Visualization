import React from "react";
import "./NavAlgo.scss";
function NavAlgo({ setAlgo, algo }) {
  return (
    <main>
      <div id="examples">
        <div className="example" onClick={() => setAlgo("Bubble Sort")}>
          <span
            className={
              algo === "Bubble Sort" ? "hover hover-3 active" : "hover hover-3"
            }>
            Bubble Sort
          </span>
        </div>
        <div className="example" onClick={() => setAlgo("Quick Sort")}>
          <span
            className={
              algo === "Quick Sort" ? "hover hover-3 active" : "hover hover-3"
            }>
            Quick Sort
          </span>
        </div>
        <div className="example" onClick={() => setAlgo("Heap Sort")}>
          <span
            className={
              algo === "Heap Sort" ? "hover hover-3 active" : "hover hover-3"
            }>
            Heap Sort
          </span>
        </div>
        <div className="example" onClick={() => setAlgo("Merge Sort")}>
          <span
            className={
              algo === "Merge Sort" ? "hover hover-3 active" : "hover hover-3"
            }>
            Merge Sort
          </span>
        </div>
      </div>
    </main>
  );
}

export default NavAlgo;

import React, { useState, useEffect } from "react";
import "./MainContent.scss";

function randomNumberFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function MainContent({ setValueRange, valueRange, newArr }) {
  const [arr, setArr] = useState([]);
  let generatedArr = [];

  for (let i = 0; i < valueRange; i++) {
    generatedArr.push(randomNumberFromInterval(10, 300));
  }

  useEffect(() => {
    setArr(generatedArr);
  }, [valueRange, newArr]);
  return (
    <div className="main-container">
      {arr.map((node, id) => {
        return (
          <div
            className="node"
            key={id}
            style={{
              height: `${node * 2.5}px`,
              width: `${1000 / valueRange}px`,
            }}></div>
        );
      })}
    </div>
  );
}

// background: `${newArr ? "#B4D0E7" : null}`,
// borderBottom: `0.4rem solid #b4d0e7`,

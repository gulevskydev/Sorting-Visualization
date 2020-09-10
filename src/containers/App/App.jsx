import React, { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import MainContent from "../MainContent/MainContent";
import "./App.scss";

function App() {
  const [valueRange, setValueRange] = useState(50);
  const [newArr, setNewArr] = useState(false);
  const [sortButton, setSortButton] = useState(false);
  const [algo, setAlgo] = useState("Bubble Sort");

  return (
    <>
      <Menu
        valueRange={valueRange}
        setValueRange={setValueRange}
        newArr={newArr}
        setNewArr={setNewArr}
        setAlgo={setAlgo}
        algo={algo}
      />
      <MainContent
        newArr={newArr}
        setNewArr={setNewArr}
        valueRange={valueRange}
        algo={algo}
        setAlgo={setAlgo}
      />
    </>
  );
}

export default App;

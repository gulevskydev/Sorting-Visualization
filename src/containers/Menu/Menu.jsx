import React, { useState, useEffect } from "react";
import "./Menu.scss";
import Button from "../../components/Button/Button";
import RangeInput from "../../components/RangeInput/RangeInput";
import NavAlgo from "../../components/NavAlgo/NavAlgo";

export default function Menu({
  algo,
  setAlgo,
  setValueRange,
  valueRange,
  setNewArr,
  newArr,
}) {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (!isDisabled) {
      let arr = [...document.querySelectorAll(".node")];
      setTimeout(() => {
        arr.map((el) => {
          el.style.backgroundColor = "#B4D0E7";
          el.transitionDuration = "0.2s";
          return el;
        });
      }, 300);
    }
  }, [isDisabled]);
  return (
    <>
      <div className="menu-container">
        <Button
          newArr={newArr}
          setNewArr={setNewArr}
          title="Generate Array"
          isDisabled={isDisabled}
        />
        <Button
          algo={algo}
          title="Sort"
          setIsDisabled={setIsDisabled}
          isDisabled={isDisabled}
          newArr={newArr}
        />
        <RangeInput
          valueRange={valueRange}
          setValueRange={setValueRange}
          isDisabled={isDisabled}
          setNewArr={setNewArr}
        />
        <NavAlgo setAlgo={setAlgo} algo={algo} />
      </div>
    </>
  );
}

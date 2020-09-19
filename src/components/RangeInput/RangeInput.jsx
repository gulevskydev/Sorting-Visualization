import React from "react";
import "./RangeInput.scss";

function RangeInput({
  newArr,
  setNewArr,
  setValueRange,
  valueRange,
  isDisabled,
}) {
  return (
    <input
      type="range"
      disabled={isDisabled}
      min="5"
      max="120"
      value={valueRange}
      onChange={(e) => {
        setNewArr(!newArr);
        setValueRange(e.target.value);
      }}></input>
  );
}

export default RangeInput;

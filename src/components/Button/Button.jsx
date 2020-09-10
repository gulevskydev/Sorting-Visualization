import React from "react";
import "./Button.scss";
import bubbleSort from "../../algorithms/bubbleSort";
import quickSort from "../../algorithms/quickSort";
import heapSort from "../../algorithms/heapSort";
import renderMergeSort from "../../algorithms/mergeSort";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

async function selectAlgo(algo, setIsDisabled) {
  let arr = [...document.querySelectorAll(".node")];

  // if (checkIfSorted(arr)) {
  //   setIsDisabled(false);
  //   alert("SORTED");
  // } else
  if (algo === "Merge Sort") {
    let arr = [...document.querySelectorAll(".node")];

    renderMergeSort(arr, setIsDisabled);
  } else {
    if (algo === "Bubble Sort") {
      await bubbleSort(arr);
    } else if (algo === "Quick Sort") {
      await quickSort(arr);
    } else if (algo === "Heap Sort") {
      await heapSort(arr);
    }
    sortIf(arr, setIsDisabled);
  }
}
function checkIfSorted(arr) {
  const unSorted = arr.map((el) => parseInt(el.style.height));
  const arrSorted = arr
    .map((el) => parseInt(el.style.height))
    .sort((a, b) => a - b);
  if (
    unSorted.filter((el, id) => el === arrSorted[id]).length ===
    arrSorted.length
  ) {
    console.log("true");
    console.log(arr[arr.length - 1].style.background);
    return true;
  } else {
    return false;
  }
}

function sortIf(arr, setIsDisabled) {
  const unSorted = arr.map((el) => parseInt(el.style.height));
  const arrSorted = arr
    .map((el) => parseInt(el.style.height))
    .sort((a, b) => a - b);
  if (
    unSorted.filter((el, id) => el === arrSorted[id]).length ===
      arrSorted.length &&
    arr.every((el) => el.style.background.includes("rgb(186, 99, 255)"))
  ) {
    // setTimeout(() => {
    console.log(true);
    setIsDisabled(false);
    return;
    // break;
    // });
  }
  setTimeout(() => {
    console.log(false);
    sortIf(arr, setIsDisabled);
  });
}

function Button(props) {
  if (props.title === "Sort") {
    const { title, algo, setIsDisabled, isDisabled } = props;
    return (
      <button
        className={isDisabled ? "blocked " : "learn-more"}
        onClick={() => {
          setIsDisabled(true);
          selectAlgo(algo, setIsDisabled);
        }}
        disabled={isDisabled}>
        {title}
      </button>
    );
  } else {
    const { setNewArr, newArr, title, isDisabled } = props;
    return (
      <button
        className={isDisabled ? "blocked " : "learn-more"}
        onClick={() => setNewArr(!newArr)}
        disabled={isDisabled}>
        {title}
      </button>
    );
  }
}

export default Button;

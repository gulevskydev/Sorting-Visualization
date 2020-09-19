import { MAIN_COLOR, SORTED_NODE, GREEN, RED } from "../utils/stylesAlgo";

function mergeSort(array) {
  let animations = [];
  let auxillaryArray = array.slice();
  getMergeSortAnimations(
    auxillaryArray,
    0,
    auxillaryArray.length - 1,
    animations
  );
  array = auxillaryArray;
  return [animations, array];
}

function getMergeSortAnimations(
  auxillaryArray,
  startIndex,
  endIndex,
  animations
) {
  if (startIndex === endIndex) return;
  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  getMergeSortAnimations(auxillaryArray, startIndex, middleIndex, animations);
  getMergeSortAnimations(auxillaryArray, middleIndex + 1, endIndex, animations);
  merge(auxillaryArray, startIndex, middleIndex, endIndex, animations);
}

function merge(auxillaryArray, startIndex, middleIndex, endIndex, animations) {
  let sortArray = [];
  let i = startIndex;
  let j = middleIndex + 1;
  while (i <= middleIndex && j <= endIndex) {
    animations.push(["comapreFirstTime", i, j]);
    animations.push(["comapreSecondTime", i, j]);
    if (auxillaryArray[i] <= auxillaryArray[j]) {
      sortArray.push(auxillaryArray[i++]);
    } else {
      sortArray.push(auxillaryArray[j++]);
    }
  }
  while (i <= middleIndex) {
    animations.push(["comapreFirstTime", i, i]);
    animations.push(["comapreSecondTime", i, i]);
    sortArray.push(auxillaryArray[i++]);
  }
  while (j <= endIndex) {
    animations.push(["comapreFirstTime", j, j]);
    animations.push(["comapreSecondTime", j, j]);
    sortArray.push(auxillaryArray[j++]);
  }
  for (let i = startIndex; i <= endIndex; i++) {
    animations.push(["overwrite", i, sortArray[i - startIndex]]);
    animations.push(["comapreSecondTime", i, i - startIndex]);
    auxillaryArray[i] = sortArray[i - startIndex];
  }
}

const renderMrgeSort = (arr, setIsDisabled) => {
  let delay =
    (arr.length > 10) & (arr.length < 90) ? 30 : arr.length < 10 ? 50 : 10;
  console.log(delay);
  const [animations] = mergeSort(arr.map((el) => parseInt(el.style.height)));

  for (let i = 0; i < animations.length; i++) {
    const isColorChange =
      animations[i][0] == "comapreFirstTime" ||
      animations[i][0] == "comapreSecondTime";
    const arrayBars = document.getElementsByClassName("node");
    if (isColorChange === true) {
      const [comparision, barOneIndex, barTwoIndex] = animations[i];
      const color =
        animations[i][0] == "comapreFirstTime" ? GREEN : SORTED_NODE;
      const barOneStyle = arrayBars[barOneIndex].style;
      const barTwoStyle = arrayBars[barTwoIndex].style;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * 10);
    } else {
      setTimeout(() => {
        const [overwrite, barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * 10);
    }
  }

  setTimeout(() => {
    setIsDisabled(false);
  }, animations.length * 10);
};

export default renderMrgeSort;

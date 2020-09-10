import { MAIN_COLOR, SORTED_NODE, GREEN, RED } from "../utils/stylesAlgo";

const quickSort = async (array) => {
  await quickSortHelper(array, 0, array.length - 1);
};

const quickSortHelper = async (array, startIdx, endIdx) => {
  let delay =
    (array.length > 20) & (array.length < 90)
      ? 600 / array.length
      : array.length < 20
      ? 200
      : 200 / array.length;

  if (startIdx >= endIdx) {
    if (endIdx < array.length && endIdx > -1) {
      array[endIdx].style.background = SORTED_NODE;
      array[endIdx].style["border-bottom"] = `0.4rem solid ${SORTED_NODE}`;
    }
    return;
  }
  let pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;

  while (rightIdx >= leftIdx) {
    array[pivotIdx].style.background = "#6c63ff";
    array[leftIdx].style.background = GREEN;
    array[rightIdx].style.background = GREEN;

    await new Promise((resolve) => setTimeout(resolve, delay));
    if (
      +String(array[leftIdx].style.height).replace(/px/g, "") >
        +String(array[pivotIdx].style.height).replace(/px/g, "") &&
      +String(array[rightIdx].style.height).replace(/px/g, "") <
        +String(array[pivotIdx].style.height).replace(/px/g, "")
    ) {
      array[leftIdx].style.background = RED;
      array[rightIdx].style.background = RED;
      await new Promise((resolve) => setTimeout(resolve, delay));

      swap(leftIdx, rightIdx, array);
      await new Promise((resolve) => setTimeout(resolve, delay));

      array[leftIdx].style.background = RED;
      array[rightIdx].style.background = RED;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    if (
      +String(array[leftIdx].style.height).replace(/px/g, "") <=
      +String(array[pivotIdx].style.height).replace(/px/g, "")
    ) {
      array[leftIdx].style.background = MAIN_COLOR;

      leftIdx++;
    }
    if (
      +String(array[rightIdx].style.height).replace(/px/g, "") >=
      +String(array[pivotIdx].style.height).replace(/px/g, "")
    ) {
      array[rightIdx].style.background = MAIN_COLOR;
      rightIdx--;
    }
  }
  array[0].style.background = SORTED_NODE;
  array[rightIdx].style.background = SORTED_NODE;
  array[pivotIdx].style.background = SORTED_NODE;
  array[rightIdx].style["border-bottom"] = `0.4rem solid ${SORTED_NODE}`;
  array[0].style["border-bottom"] = `0.4rem solid ${SORTED_NODE}`;
  array[pivotIdx].style["border-bottom"] = `0.4rem solid ${SORTED_NODE}`;
  swap(pivotIdx, rightIdx, array);
  await new Promise((resolve) => setTimeout(resolve, delay));

  const leftSubarrayIsSmaller =
    rightIdx - 1 - startIdx < endIdx - (rightIdx - 1);
  if (leftSubarrayIsSmaller) {
    quickSortHelper(array, startIdx, rightIdx - 1);
    quickSortHelper(array, rightIdx + 1, endIdx);
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx);
    quickSortHelper(array, startIdx, rightIdx - 1);
  }
};

async function swap(i, j, array) {
  let temp = array[i].style.height;
  array[i].style.height = array[j].style.height;
  array[j].style.height = temp;
}

export default quickSort;

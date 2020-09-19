import { MAIN_COLOR, SORTED_NODE, GREEN, RED } from "../utils/stylesAlgo";

const heapSort = async (array) => {
  let delay =
    (array.length > 20) & (array.length < 90)
      ? 600 / array.length
      : array.length < 20
      ? 200
      : 200 / array.length;
  await buildHeap(array, delay);

  for (let i = array.length - 1; i >= 0; i--) {
    swap(0, i, array);
    array[i].style.background = SORTED_NODE;
    await new Promise((resolve) => setTimeout(resolve, delay));
    await siftDown(0, i - 1, array, delay);
  }
  return array;
};

const buildHeap = async (array, delay) => {
  let firstParentIdx = Math.floor(array.length / 2);

  for (let i = firstParentIdx; i >= 0; i--) {
    await siftDown(i, array.length - 1, array, delay);
  }
};

const siftDown = async (currentIdx, endIdx, heap, delay) => {
  let childOneIdx = currentIdx * 2 + 1;
  let idxToSwap;

  while (childOneIdx <= endIdx) {
    let childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;

    if (
      childTwoIdx > -1 &&
      parseInt(heap[childTwoIdx].style.height) >
        parseInt(heap[childOneIdx].style.height)
    ) {
      idxToSwap = childTwoIdx;
    } else {
      idxToSwap = childOneIdx;
    }
    heap[idxToSwap].style.background = GREEN;
    heap[currentIdx].style.background = GREEN;
    await new Promise((resolve) => setTimeout(resolve, delay));
    if (
      parseInt(heap[idxToSwap].style.height) >
      parseInt(heap[currentIdx].style.height)
    ) {
      heap[idxToSwap].style.background = RED;
      heap[currentIdx].style.background = RED;
      await new Promise((resolve) => setTimeout(resolve, delay));

      swap(currentIdx, idxToSwap, heap);
      await new Promise((resolve) => setTimeout(resolve, delay));
      heap[idxToSwap].style.background = MAIN_COLOR;
      heap[currentIdx].style.background = MAIN_COLOR;

      currentIdx = idxToSwap;
      childOneIdx = currentIdx * 2 + 1;
    } else {
      heap[idxToSwap].style.background = MAIN_COLOR;
      heap[currentIdx].style.background = MAIN_COLOR;
      await new Promise((resolve) => setTimeout(resolve, delay));

      return;
    }
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
};

const swap = async (i, j, array) => {
  const temp = array[i].style.height;
  array[i].style.height = array[j].style.height;
  array[j].style.height = temp;
};

export default heapSort;

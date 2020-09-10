import { MAIN_COLOR, SORTED_NODE, GREEN, RED } from "../utils/stylesAlgo";

const bubbleSort = async (inputArr) => {
  let len = inputArr.length;
  let delay = (len > 14) & (len < 90) ? 400 / len : len < 14 ? 200 : 50 / len;
  console.log(delay);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - (i + 1); j++) {
      inputArr[j].style.background = GREEN;
      inputArr[j + 1].style.background = GREEN;
      await new Promise((resolve) => setTimeout(resolve, delay));

      if (
        +String(inputArr[j].style.height).replace(/px/g, "") >
        +String(inputArr[j + 1].style.height).replace(/px/g, "")
      ) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        inputArr[j].style.background = RED;
        inputArr[j + 1].style.background = RED;
        let tmp = String(inputArr[j].style.height);
        inputArr[j].style.height = String(inputArr[j + 1].style.height);
        inputArr[j + 1].style.height = tmp;
        await new Promise((resolve) => setTimeout(resolve, delay));
        inputArr[j].style.background = MAIN_COLOR;
      }
      inputArr[j].style.background = MAIN_COLOR;
    }
    inputArr[len - (i + 1)].style.background = SORTED_NODE;
    inputArr[len - (i + 1)].style[
      "border-bottom"
    ] = `0.4rem solid ${SORTED_NODE}`;
  }
};
export default bubbleSort;

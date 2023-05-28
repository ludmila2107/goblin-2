import {
  countAtempts,
  counts,
} from "../constants/constants.js";


let countLose = 5; //количество попыток
let countWin = 0; //количество набранных балов

export default function clickCell(e) {
  if (e.target.className == "cell cell-active") {
    countWin += 1;
    e.target.classList.remove("cell-active");
    counts.textContent = countWin;
  } else {
    countLose -= 1;
    countAtempts.textContent = countLose;
    if (countLose == 0) {
      alert("Вы проиграли!");
      countWin = 0;
      counts.textContent = countWin;
      countLose = 5;
      countAtempts.textContent = countLose;
    }
  }
}

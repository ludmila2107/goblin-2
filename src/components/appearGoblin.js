export default function appearGoblin() {
  const previousActive = document.querySelector(".cell-active");
  if (previousActive) {
    previousActive.classList.remove("cell-active");
  }
  const arrayOfCells = document.querySelectorAll(".cell");
  const random = Math.floor(Math.random() * arrayOfCells.length); //номер клетки случайный
  arrayOfCells[random].classList.add("cell-active");
}

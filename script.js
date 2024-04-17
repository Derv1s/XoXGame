const 
  boxes = document.getElementsByClassName('box'),
  restartBtn = document.getElementById('restart'),
  statusp = document.getElementById('status');

let counter = 0;

for (let i = 0; i < boxes.length; i++) {
  const element = boxes[i];
  element.addEventListener('click', () => {
    if (counter % 2 == 0) {
      element.textContent = 'X';
      element.classList.add('X');
    } else {
      element.textContent = 'O';
      element.classList.add('O');
    }
    counter++;
    const currentPlayer = counter % 2 === 0 ? 'O' : 'X';
    element.style.pointerEvents = 'none';
    if (checkWinner()) {
      statusp.textContent = `Winner is ${currentPlayer}!`;
      for (const elem of boxes) {
        elem.style.pointerEvents = 'none';
      }
    } else if ( counter == 9) {
      statusp.textContent = 'Draw!';
    }
  });
}

restartBtn.addEventListener('click', () => {
  for (const element of boxes) {
    element.textContent = '';
    element.style.pointerEvents = 'auto';
    element.classList = "box";
    counter = 0;
    statusp.textContent = '';
  }
});

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = () => {
  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (
      boxes[a].textContent &&
      boxes[a].textContent === boxes[b].textContent &&
      boxes[a].textContent === boxes[c].textContent
    ) {
      return true;
    }
  }
  return false;
};

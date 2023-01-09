import Counter from './counter.js';

export default class Logic {
  constructor(field) {
    this.field = field;
    this.wasHit = false;
  }

  gameOverScreen() {
    const gameOver = document.querySelector('.gameover');
    gameOver.addEventListener('click', () => {
      document.location.reload();
    });
  }

  drawBoard() {
    for (let i = 0; i < 16; i += 1) {
      const newCell = '<div class="cell"></div>';
      this.field.innerHTML += newCell;
    }
  }
  
  randomizeCell(index) {
    const result = Math.floor(Math.random() * (this.field.childNodes.length - 1));

    if (result === index) {
      return this.randomizeCell(index);
    }
    return result;
  }

  moveGoblin() {
    let index = 0;
    let counter = 0;

    const interval = setInterval(() => {
      const activeCell = this.field.querySelector('.active');

      if (activeCell) {
        activeCell.classList.remove('active');
      }
      index = this.randomizeCell(index);
      const newCell = this.field.childNodes[index];
      newCell.classList.add('active');

      if (!this.wasHit && counter > 0) {
        Counter.goblinToAppear();
      }

      Counter.boardRedraw();

      if (Counter.goblinCounter === 5) {
        clearInterval(interval);
        document.querySelector('.gameover').classList.remove('hide');
        this.gameOverScreen();
      }

      this.wasHit = false;
      counter += 1;
    }, 1000);
  }
}

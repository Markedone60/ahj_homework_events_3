export default class Counter {
  static goblinCounter = 0;
  static score = 0;

  static scored() {
    this.score += 1;
  }

  static goblinToAppear() {
    this.goblinCounter += 1;
  }

  static boardRedraw() {
    const scoreElement = document.querySelector('.score');
    const goblinCounterElement = document.querySelector('.goblin-appears');
    scoreElement.textContent = this.score;
    goblinCounterElement.textContent = this.goblinCounter;
  }
}
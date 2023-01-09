import Counter from './counter';

export default class Menu {
  constructor(field) {
    this.field = field;
  }

  menuListeners() {
    const menuButton = document.querySelector('#menu-button');
    const fieldCells = document.querySelectorAll('.cell');

    menuButton.addEventListener('click', () => {
      this.field.moveGoblin();
      this.goblinCounter = 0;
    });

    for (let i = 0; i < fieldCells.length; i += 1) {
      fieldCells.item(i).addEventListener('click', (event) => {
        if (event.target.classList.contains('active')) {
          Counter.scored();
          this.field.wasHit = true;
        }
      });
    }
  }
}
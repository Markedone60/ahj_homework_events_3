import Logic from './logic';
import Counter from './counter';
import Menu from './menu-logic';

const container = document.querySelector('.field-container');

const field = new Logic(container);
field.drawBoard();

const menu = new Menu(field);
menu.menuListeners();

Counter.boardRedraw();


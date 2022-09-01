import MicroModal from 'micromodal';

import GameManager from './GameManager';

const gameManager = new GameManager('#twenty-fourty-eight-gameboard');

gameManager.init();

window.resetGame = (modalName) => {
  if (modalName) { MicroModal.close(modalName); }

  gameManager.resetGame();
};

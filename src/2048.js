import MicroModal from 'micromodal';

import GameManager from './GameManager';

const gameManager = new GameManager({
  gameboardSelector: '#twenty-fourty-eight-gameboard',
  winningTileSelector: '#winning-tile',
  winningTile: 2048,
});

gameManager.init();

window.resetGame = (modalName) => {
  if (modalName) { MicroModal.close(modalName); }

  gameManager.resetGame();
};

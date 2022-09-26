import MicroModal from 'micromodal';

import GameManager from './GameManager';

const $winningTile = document.querySelector('#winning-tile');

const gameManager = new GameManager({
  gameboardSelector: '#twenty-fourty-eight-gameboard',
  winningTile: 2048,
  onWin: (winningTile) => MicroModal.show('game-won-modal', {
    onShow: () => {
      $winningTile.textContent = winningTile;
    },
  }),
});

gameManager.init();

window.resetGame = (modalName) => {
  if (modalName) { MicroModal.close(modalName); }

  gameManager.resetGame();
};

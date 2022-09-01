export default function populateStatsModal(modal, { currentGame, stats }) {
  modal.querySelector('#current-game-score').textContent = currentGame.score.toLocaleString();
  modal.querySelector('#highest-score').textContent = stats.highestScore.toLocaleString();
  modal.querySelector('#current-game-best-tile').textContent = currentGame.highestTile.toLocaleString();
  modal.querySelector('#highest-tile').textContent = stats.highestTile.toLocaleString();
}

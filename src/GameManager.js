import MicroModal from 'micromodal';

import { defaultCurrentGameState, DIRECTIONS } from './2048.constants';
import Grid from './Grid';
import InputManager from './InputManager';
import InvalidMoveError from './InvalidMoveError';
import Tile from './Tile';
import gameState from './data/gameState';
import populateStatsModal from './utils/populateStatsModal';
import sleep from './utils/sleep';
import updateScore from './utils/updateScore';

export default class GameManager {
  #hasGameStarted = false;

  #$gameboard;

  #grid;

  #inputManager;

  #state;

  constructor(gameboardSelector) {
    this.#state = gameState;
    this.#$gameboard = document.querySelector(gameboardSelector);
    this.#inputManager = new InputManager(this.#inputHandler.bind(this), this.#$gameboard);

    MicroModal.init({
      onShow: (modal) => {
        if (modal.id === 'stats-modal') {
          populateStatsModal(modal, { ...this.#state });
        }

        this.#inputManager.deactivate();
      },
      onClose: () => {
        if (this.#grid.canMoveTilesAnyDirection()) {
          this.#inputManager.activate();
        } else { this.resetGame(); }
      },
    });
  }

  init() {
    if (!this.#hasGameStarted) {
      const promises = [];
      const frag = document.createDocumentFragment();

      this.#grid = new Grid(this.#$gameboard);
      this.#state.currentGame.tiles.forEach((tileProp) => {
        const newTile = new Tile(tileProp.value);
        newTile.x = tileProp.x;
        newTile.y = tileProp.y;
        this.#grid.cells[this.#grid.size * tileProp.y + tileProp.x].tile = newTile;

        frag.appendChild(newTile.$ele);
        promises.push(newTile.awaitTransition());
      });

      this.#$gameboard.appendChild(frag);

      Promise.all(promises).then(() => {
        if (this.#grid.canMoveTilesAnyDirection() || !promises.length) {
          this.createRandomTiles(promises.length === 0 ? 2 : 0);
          this.#inputManager.activate();
        } else { this.#animateCellsAndShowStatsModal(); }
      });

      updateScore(this.#state.currentGame.score);

      this.#hasGameStarted = true;
    }

    return this;
  }

  saveCurrentState() {
    const { tiles, highestTile } = this.#grid.cells
      .filter((cell) => cell.tile)
      .reduce((obj, cell) => {
        obj.highestTile = Math.max(obj.highestTile, cell.tile.value);
        obj.tiles.push({ x: cell.x, y: cell.y, value: cell.tile.value });

        return obj;
      }, { tiles: [], highestTile: 0 });

    this.#state.currentGame.tiles = tiles;
    this.#state.currentGame.highestTile = highestTile;

    return this;
  }

  createRandomTiles(n = 1) {
    const tiles = [];
    const frag = document.createDocumentFragment();

    for (let i = 0; i < n; i += 1) {
      const emptyCell = this.#grid.randomEmptyCell();

      if (!emptyCell) { break; }

      const tile = new Tile();
      emptyCell.tile = tile;

      frag.appendChild(tile.$ele);
      tiles.push(tile);
    }

    this.#$gameboard.appendChild(frag);

    return tiles;
  }

  resetGame() {
    this.#state.currentGame = { ...defaultCurrentGameState };
    this.#hasGameStarted = false;

    this.init();

    return this;
  }

  async moveTiles(direction) {
    switch (direction.toLowerCase()) {
      case DIRECTIONS.ArrowUp:
      case DIRECTIONS.W:
        if (!this.#grid.canMoveTilesUp()) { throw new InvalidMoveError(); }

        return this.#grid.moveTilesUp();
      case DIRECTIONS.ArrowDown:
      case DIRECTIONS.S:
        if (!this.#grid.canMoveTilesDown()) { throw new InvalidMoveError(); }

        return this.#grid.moveTilesDown();
      case DIRECTIONS.ArrowLeft:
      case DIRECTIONS.A:
        if (!this.#grid.canMoveTilesLeft()) { throw new InvalidMoveError(); }

        return this.#grid.moveTilesLeft();
      case DIRECTIONS.ArrowRight:
      case DIRECTIONS.D:
        if (!this.#grid.canMoveTilesRight()) { throw new InvalidMoveError(); }

        return this.#grid.moveTilesRight();
      default:
        throw new InvalidMoveError();
    }
  }

  async #handleGameOver() {
    this.#inputManager.deactivate();

    this.#state.stats.highestScore = Math.max(
      this.#state.stats.highestScore,
      this.#state.currentGame.score,
    );
    this.#state.stats.highestTile = Math.max(
      this.#state.stats.highestTile,
      this.#state.currentGame.highestTile,
    );
    this.#state.stats.lastTimePlayed = this.#state.currentGame.date;

    this.#animateCellsAndShowStatsModal();
  }

  async #animateCellsAndShowStatsModal() {
    await Promise.all(
      this.#grid.cells.map(async (cell) => {
        await sleep(50 * (cell.x + cell.y));

        return cell.tile ? cell.tile.pop() : null;
      }),
    );

    MicroModal.show('stats-modal', {
      onShow: (modal) => populateStatsModal(modal, { ...this.#state }),
      onClose: () => this.resetGame(),
    });
  }

  async #inputHandler(direction) {
    try {
      const additionalScore = await this.moveTiles(direction);

      if (additionalScore > 0) {
        this.#state.currentGame.score += additionalScore;

        updateScore(this.#state.currentGame.score, additionalScore);
      }

      const [newTile] = this.createRandomTiles(1);
      this.saveCurrentState();

      if (this.#grid.canMoveTilesAnyDirection()) {
        this.#inputManager.activate();
      } else if (newTile) {
        newTile.awaitTransition().then(() => this.#handleGameOver());
      } else { this.#handleGameOver(); }
    } catch (e) {
      if (!(e instanceof InvalidMoveError)) { throw e; }
      if (this.#grid.canMoveTilesAnyDirection()) {
        this.#inputManager.activate();
      }
    }
  }
}

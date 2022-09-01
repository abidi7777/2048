export default class Cell {
  #tile;

  #mergeTile;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get tile() {
    return this.#tile;
  }

  set tile(tile) {
    this.#tile = tile;

    if (!tile) return;

    this.#tile.x = this.x;
    this.#tile.y = this.y;
  }

  get mergeTile() {
    return this.#mergeTile;
  }

  set mergeTile(tile) {
    this.#mergeTile = tile;

    if (!tile) return;

    this.#mergeTile.x = this.x;
    this.#mergeTile.y = this.y;
  }

  canAccept(tile) {
    return !this.tile || (!this.mergeTile && this.#tile.value === tile.value);
  }

  mergeTiles() {
    if (!this.tile || !this.mergeTile) { return 0; }

    this.tile.value += this.mergeTile.value;

    this.mergeTile.remove();

    this.mergeTile = null;

    this.tile.pop();

    return this.tile.value;
  }
}

import { animate, awaitAnimate } from './utils/animate';

export default class Tile {
  #x;

  #y;

  #value;

  #$tile;

  constructor(value = Math.random() > 0.5 ? 2 : 4) {
    this.#$tile = document.createElement('div');
    this.#$tile.classList.add('tile');
    this.value = value;

    animate(this.#$tile, 'show');
  }

  get value() {
    return this.#value;
  }

  set value(v) {
    const power = Math.log2(v);
    const backgroundLightness = 100 - power * 9;

    this.#value = v;
    this.#$tile.textContent = v;

    this.#$tile.style.setProperty('--background-lightness', `${backgroundLightness}%`);
    this.#$tile.style.setProperty('--text-lightness', `${backgroundLightness <= 50 ? 90 : 10}%`);
  }

  get x() {
    return this.#x;
  }

  set x(x) {
    this.#$tile.style.setProperty('--x', x);

    this.#x = x;
  }

  get y() {
    return this.#y;
  }

  set y(y) {
    this.#$tile.style.setProperty('--y', y);

    this.#y = y;
  }

  get $ele() {
    return this.#$tile;
  }

  remove() {
    this.#$tile.remove();
  }

  awaitTransition() {
    return awaitAnimate(this.#$tile);
  }

  pop() {
    this.#$tile.style.setProperty('--pop-duration', '100ms');
    this.#$tile.style.setProperty('--pop-magnitude', Math.log2(this.value));

    return animate(this.#$tile, 'pop');
  }
}

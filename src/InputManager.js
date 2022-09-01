import { ALLOWED_GESTURE_TIME, THRESHOLD_DISTANCE } from './2048.constants';

function touchMoveHandler(e) { e.preventDefault(); }

export default class InputManager {
  #callback;

  #boundedKeyboardInputHandler;

  #boundedTouchStartHandler;

  #$gameBoard;

  constructor(callback, $gameBoard) {
    this.#$gameBoard = $gameBoard;
    this.#boundedKeyboardInputHandler = this.#keyboardInputHandler.bind(this);
    this.#boundedTouchStartHandler = this.#touchStartHandler.bind(this);
    this.#callback = callback;
  }

  activate() {
    window.addEventListener('keydown', this.#boundedKeyboardInputHandler, { once: true });
    this.#$gameBoard.addEventListener('touchstart', this.#boundedTouchStartHandler, { once: true, passive: false });
  }

  deactivate() {
    window.removeEventListener('keydown', this.#boundedKeyboardInputHandler);
    this.#$gameBoard.removeEventListener('touchstart', this.#boundedTouchStartHandler);
  }

  #touchStartHandler(touchStartEvent) {
    touchStartEvent.preventDefault();
    this.deactivate();

    const startTime = new Date();
    const startTouchData = touchStartEvent.changedTouches[0];

    this.#$gameBoard.addEventListener('touchmove', touchMoveHandler, { passive: false });
    this.#$gameBoard.addEventListener(
      'touchend',
      async (touchEndEvent) => {
        touchEndEvent.preventDefault();
        this.#$gameBoard.removeEventListener('touchmove', touchMoveHandler);

        const endTouchData = touchEndEvent.changedTouches[0];

        if (new Date() - startTime > ALLOWED_GESTURE_TIME) {
          this.activate();

          return;
        }

        const distanceX = endTouchData.pageX - startTouchData.pageX;
        const distanceY = endTouchData.pageY - startTouchData.pageY;

        if (Math.abs(distanceX) >= THRESHOLD_DISTANCE) {
          await this.#callback(distanceX > 0 ? 'ArrowRight' : 'ArrowLeft');
        } else if (Math.abs(distanceY) >= THRESHOLD_DISTANCE) {
          await this.#callback(distanceY > 0 ? 'ArrowDown' : 'ArrowUp');
        }

        this.activate();
      },
      { once: true },
    );
  }

  async #keyboardInputHandler(e) {
    this.deactivate();
    await this.#callback(e.key);
    this.activate();
  }
}

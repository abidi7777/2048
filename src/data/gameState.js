import DeepProxy from 'proxy-deep';
import _defaultsDeep from 'lodash-es/defaultsDeep';

import { defaultGameState } from '../2048.constants';
import deepClone from '../utils/deepClone';

const clonedGameState = deepClone(defaultGameState);
let gameState = null;

try {
  gameState = { ...clonedGameState, ...JSON.parse(localStorage.getItem('gameState')) };
  gameState.currentGame.date = new Date(gameState.currentGame.date);

  _defaultsDeep(gameState, clonedGameState);
} catch (e) { gameState = { ...clonedGameState }; }

export default new DeepProxy(gameState, {
  get(...args) {
    const result = Reflect.get(...args);

    if (result !== null
      && typeof result === 'object'
      && !(result instanceof Date)) {
      return this.nest(result);
    }

    return result;
  },

  set(...args) {
    const result = Reflect.set(...args);

    localStorage.setItem('gameState', JSON.stringify(gameState));

    return result;
  },
});

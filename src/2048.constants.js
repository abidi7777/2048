export const DIRECTIONS = Object.freeze({
  ArrowLeft: 'arrowleft',
  ArrowRight: 'arrowright',
  ArrowUp: 'arrowup',
  ArrowDown: 'arrowdown',
  W: 'w',
  A: 'a',
  S: 's',
  D: 'd',
});

export const defaultCurrentGameState = Object.seal({
  score: 0,
  highestTile: 0,
  date: new Date(),
  tiles: [],
});

export const defaultGameState = Object.seal({
  stats: {
    highestTile: 0,
    highestScore: 0,
  },
  currentGame: defaultCurrentGameState,
});

export const DEFAULT_GRID_SIZE = 4;
export const DEFAULT_CELL_SIZE = 19;
export const DEFAULT_CELL_GAP = 2;

export const THRESHOLD_DISTANCE = 75;
export const ALLOWED_GESTURE_TIME = 500;

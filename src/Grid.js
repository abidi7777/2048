import { DEFAULT_GRID_SIZE, DEFAULT_CELL_SIZE, DEFAULT_CELL_GAP } from './2048.constants';
import Cell from './Cell';
import canMoveTiles from './utils/canMoveTiles';

export default class Grid {
  #cells = [];

  #$gameboard;

  #gridSize;

  constructor($gameboard, gridProps = {}) {
    const {
      gridSize = DEFAULT_GRID_SIZE,
      cellSize = DEFAULT_CELL_SIZE,
      cellGap = DEFAULT_CELL_GAP,
    } = gridProps;

    $gameboard.innerHTML = '';
    $gameboard.style.setProperty('--grid-size', gridSize);
    $gameboard.style.setProperty('--cell-size', `${cellSize}vmin`);
    $gameboard.style.setProperty('--cell-gap', `${cellGap}vmin`);

    this.#$gameboard = $gameboard;
    this.#gridSize = gridSize;

    this.#createCells();
  }

  get cellsByColumn() {
    return this.cells.reduce((cellGrid, cell) => {
      cellGrid[cell.x] = cellGrid[cell.x] || [];
      cellGrid[cell.x][cell.y] = cell;

      return cellGrid;
    }, []);
  }

  get cellsByRow() {
    return this.cells.reduce((cellGrid, cell) => {
      cellGrid[cell.y] = cellGrid[cell.y] || [];
      cellGrid[cell.y][cell.x] = cell;

      return cellGrid;
    }, []);
  }

  get cells() {
    return this.#cells;
  }

  get #emptyCells() {
    return this.cells.filter((cell) => !cell.tile);
  }

  get size() {
    return this.#gridSize;
  }

  randomEmptyCell() {
    const randomIndex = (Math.random() * this.#emptyCells.length) >> 0;

    return this.#emptyCells[randomIndex];
  }

  moveTilesUp() {
    return this.#moveTiles(this.cellsByColumn);
  }

  moveTilesDown() {
    return this.#moveTiles(this.cellsByColumn.map((column) => [...column].reverse()));
  }

  moveTilesLeft() {
    return this.#moveTiles(this.cellsByRow);
  }

  moveTilesRight() {
    return this.#moveTiles(this.cellsByRow.map((row) => [...row].reverse()));
  }

  async #moveTiles(cells) {
    await Promise.all(
      cells.flatMap((group) => {
        const promises = [];

        for (let i = 1; i < group.length; i += 1) {
          const cell = group[i];

          if (cell.tile) {
            let lastValidCell;

            for (let j = i - 1; j >= 0; j -= 1) {
              const moveToCell = group[j];

              if (!moveToCell.canAccept(cell.tile)) break;

              lastValidCell = moveToCell;
            }

            if (lastValidCell != null) {
              promises.push(cell.tile.awaitTransition());

              if (lastValidCell.tile != null) {
                lastValidCell.mergeTile = cell.tile;
              } else { lastValidCell.tile = cell.tile; }

              cell.tile = null;
            }
          }
        }

        return promises;
      }),
    );

    let additionalScore = 0;

    this.cells.forEach((cell) => {
      if (cell.mergeTile && cell.tile) {
        additionalScore += cell.tile.value + cell.mergeTile.value;
      }

      cell.mergeTiles();
    });

    return additionalScore;
  }

  canMoveTilesAnyDirection() {
    return (
      this.canMoveTilesUp()
      || this.canMoveTilesDown()
      || this.canMoveTilesLeft()
      || this.canMoveTilesRight()
    );
  }

  canMoveTilesUp() {
    return canMoveTiles(this.cellsByColumn);
  }

  canMoveTilesDown() {
    return canMoveTiles(this.cellsByColumn.map((column) => [...column].reverse()));
  }

  canMoveTilesLeft() {
    return canMoveTiles(this.cellsByRow);
  }

  canMoveTilesRight() {
    return canMoveTiles(this.cellsByRow.map((row) => [...row].reverse()));
  }

  #createCells() {
    const gridMatrixSize = this.#gridSize * this.#gridSize;

    for (let i = 0; i < gridMatrixSize; i += 1) {
      const cell = document.createElement('div');

      cell.classList.add('cell');
      this.#cells.push(new Cell(i % this.#gridSize, Math.floor(i / this.#gridSize)));
      this.#$gameboard.append(cell);
    }

    return this;
  }
}

export default function canMoveTiles(cells) {
  return cells.some((group) => group.some((cell, index) => {
    if (index === 0 || !cell.tile) return false;

    const moveToCell = group[index - 1];

    return moveToCell.canAccept(cell.tile);
  }));
}

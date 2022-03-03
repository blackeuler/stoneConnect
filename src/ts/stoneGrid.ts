import { Grid, firstAvailableRow, place_grid, create_grid } from "./grid";

interface Red {}
interface Black {}
interface Empty {}

type Stone = Red | Black | Empty;

interface StoneGrid {
  grid: Grid<Stone>;
}

export const createStoneGrid = (): StoneGrid => {
  return {
    grid: create_grid(6, 6),
  };
};

export const placeStone = (
  stone: Stone,
  col: number,
  stoneGrid: StoneGrid
): StoneGrid => {
  return {
    grid: place_grid(
      stone,
      firstAvailableRow(col, stoneGrid.grid),
      col,
      stoneGrid.grid
    ),
  };
};

import { Grid, firstAvailableRow, place_grid, create_grid } from "./grid";

export type Stone = { type: "red" } | { type: "black" };

export interface StoneGrid {
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

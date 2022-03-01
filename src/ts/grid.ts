interface Grid {
  num_rows: number;
  num_cols: number;
  content: Cell[];
}

interface Cell {
  row: number;
  col: number;
  content: any;
}
const create_grid = (num_rows: number, num_cols: number): Grid => {
  return {
    num_rows,
    num_cols,
    content: [],
  };
};
const empty_grid = (grid: Grid): boolean => {
  return grid.content.length === 0;
};

const place_grid = (
  content: any,
  row: number,
  col: number,
  grid: Grid
): Grid => {
  return {
    num_rows: grid.num_rows,
    num_cols: grid.num_cols,
    content: [{ row, col, content }, ...grid.content],
  };
};

const grid_contents = (grid: Grid): Cell[] => {
  return grid.content;
};

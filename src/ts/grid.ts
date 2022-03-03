interface Grid<Type> {
  num_rows: number;
  num_cols: number;
  content: Cell<Type>[];
}

interface Cell<Type> {
  row: number;
  col: number;
  content: Type;
}
const create_grid = (num_rows: number, num_cols: number): Grid<any> => {
  return {
    num_rows,
    num_cols,
    content: [],
  };
};
const empty_grid = (grid: Grid<any>): boolean => {
  return grid.content.length === 0;
};

const place_grid = <Type>(
  content: Type,
  row: number,
  col: number,
  grid: Grid<Type>
): Grid<Type> => {
  return {
    num_rows: grid.num_rows,
    num_cols: grid.num_cols,
    content: [{ row, col, content }, ...grid.content],
  };
};

const getColumnCells = (grid: Grid<any>, col: number): Cell<any>[] => {
  return grid.content.filter((x) => x.col === col);
};

const grid_contents = <T>(grid: Grid<T>): Cell<T>[] => {
  return grid.content;
};

const firstAvailableRow = (col: number, grid: Grid<any>): number => {
  const columnCells = getColumnCells(grid, col);
  if (columnCells.length === 0) {
    return 1;
  } else {
    return columnCells.sort((c1, c2) => c1.row - c2.row)[0].row;
  }
};

export {
  firstAvailableRow,
  place_grid,
  grid_contents,
  create_grid,
  empty_grid,
  getColumnCells,
  Grid,
  Cell,
};

// lower left point of the rock we need to insert in the grid
type RockCollisionPoint = [number, number];
type GridCell = "." | "#";

const jets = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>";
const rocks = [
  "####",
  `.#.
###
.#.`,
  `..#
..#
###`,
  `#
#
#
#`,
  `##
##`,
];
const ROCK_CHAR = "#";
const EMPTY_CHAR = ".";
const NUMBER_OF_ROWS_TO_ADD = 4;
const GRID_ROW: GridCell[] = [".", ".", ".", ".", ".", ".", "."];
const grid: GridCell[][] = [["#", "#", "#", "#", "#", "#", "#"]];

function countEmptyRows(grid: GridCell[][]) {
  const emptyRowCount = grid.filter((row) => row.every((cell) => cell === EMPTY_CHAR)).length;
  return emptyRowCount;
}

function removeEmptyRows(grid: GridCell[][]) {
  const newGrid = grid.filter((row) => !row.every((cell) => cell === EMPTY_CHAR));
  return newGrid;
}

function addRockToGrid(grid: GridCell[][], rock: GridCell[][]) {
  const newGrid = grid;
  for (let i = 0; i < rock.length; i++) {
    newGrid[i] = newGrid[i].map((cell, index) => (cell === EMPTY_CHAR ? rock[i][index] : cell));
  }
  return newGrid;
}

function gridifyRock(rock: string, xOffset = 2): GridCell[][] {
  const grid: GridCell[][] = [];
  const rockParts = rock.split("\n");

  for (let i = 0; i < rockParts.length; i++) {
    let gridRow = GRID_ROW;
    const rockPart = rockParts[i];
    for (let j = 0; j < rockPart.length; j++) {
      gridRow[j + xOffset] = rockPart[j] as GridCell;
    }
    grid.push(gridRow);
  }

  return grid;
}

/**
 * Checks if the rock overlaps with other rocks already in the grid.
 * If it does, it returns true, otherwise false
 * If we have an overlap, we know we have to go back one level to place the rock in the grid.
 * @param grid
 * @param rock
 * @returns
 */
function gridOverlap(grid: GridCell[][], rock: GridCell[][]): boolean {
  for (let i = 0; i < rock.length; i++) {
    for (let j = 0; j < rock[i].length; j++) {
      if (rock[i][j] === ROCK_CHAR && grid[i][j] === ROCK_CHAR) {
        return true;
      }
    }
  }
  return false;
}

function getRockWidth(rock: string) {
  return Math.max(...rock.split("\n").map((line) => line.length));
}

function drawGrid(grid: GridCell[][]) {
  // 1. Transfrom the grid into strings
  const strings = removeEmptyRows(grid)
    .reverse()
    .map((row) => `|${row.join("")}|`);
  // 2. Join the strings with newlines
  const stringGrid = strings.join("\n");
  return stringGrid;
}

function calculateHorizontalOffsetBeforeReachGrid(rock: string, xOffset: number) {
  // Calculate the position of the rock just before it reaches the rest of the grid
  let horizontalPosition = 2;
  for (let j = 0; j < 3; j++) {
    horizontalPosition = jetPush(horizontalPosition, rock);
  }
  return horizontalPosition;
}

function expandGrid(grid: GridCell[][]) {
  const emptyRows = countEmptyRows(grid);
  const newGrid = grid;
  for (let i = 0; i < NUMBER_OF_ROWS_TO_ADD - emptyRows; i++) {
    newGrid.push(GRID_ROW);
  }
  return newGrid;
}

let currentJetIndex = 0;
function jetPush(startPosition: number, rock: string) {
  const rockWidth = getRockWidth(rock);
  const jet = jets[currentJetIndex];
  const horizontalPosition =
    jet === "<" ? Math.max(0, startPosition - 1) : Math.min(GRID_ROW.length - rockWidth, startPosition + 1);
  currentJetIndex = (currentJetIndex + 1) % jets.length;
  return horizontalPosition;
}

for (let i = 0; i < 2; i++) {
  const rock = rocks[i];
  let falling = true;
  let horizontalPosition = calculateHorizontalOffsetBeforeReachGrid(rock, 2);

  do {
    // before storing the horizontal position, we need to check for collisions and if necessary, revert
    const tempHorizontalPosition = jetPush(horizontalPosition, rock);
    const rockGrid = gridifyRock(rock, tempHorizontalPosition);
    console.log(drawGrid(rockGrid));
    console.log(drawGrid(grid));
    if (gridOverlap(grid, rockGrid)) {
      falling = false;
    } else {
      horizontalPosition = tempHorizontalPosition;
    }
  } while (falling);
}

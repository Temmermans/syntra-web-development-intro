// interface State {
//   maxJetIndex: number;
//   maxRockIndex: number;
//   currentJetIndex: number;
//   groundLevel: number[];
//   stack: string[];
// }

// type CollisionPoint = [number, number];

// const ROCK_CHAR = "#";
// const EMPTY_CHAR = ".";
// const rocks = [
//   "####",
//   `.#.
// ###
// .#.`,
//   `..#
// ..#
// ###`,
//   `#
// #
// #
// #`,
//   `##
// ##`,
// ];
// const jets = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>";
// const state: State = {
//   maxJetIndex: jets.length,
//   maxRockIndex: rocks.length - 1,
//   currentJetIndex: 0,
//   groundLevel: [0, 0, 0, 0, 0, 0, 0],
//   stack: [],
// };
// const ROUNDS = 2022;
// const WIDTH = 7;
// const SPAWN_HEIGHT = 4;

// function getMaxGroundLevel() {
//   return Math.max(...state.groundLevel);
// }

// function getRockWidth(rock: string) {
//   return Math.max(...rock.split("\n").map((line) => line.length));
// }

// function gridifyRock(rock: string, xOffset = 2): string[] {
//   const grid: string[] = [];
//   const rockParts = rock.split("\n");

//   for (let i = 0; i < rockParts.length; i++) {
//     let gridRow = [".", ".", ".", ".", ".", ".", "."];
//     const rockPart = rockParts[i];
//     for (let j = 0; j < rockPart.length; j++) {
//       gridRow[j + xOffset] = rockPart[j];
//     }
//     grid.push("|" + gridRow.join("") + "|");
//   }

//   return grid;
// }

// function calculateRockPositions(
//   arr: string[],
//   offset: number,
//   d: any = 0,
//   canOverwriteLowerValues: boolean = true
// ): number[] {
//   const groundLevels = [d, d, d, d, d, d, d];

//   for (let i = 0; i < arr.length; i++) {
//     const gridRow = arr[i];
//     if (gridRow === "|.......|") {
//       break;
//     }
//     for (let j = 1; j < gridRow.length; j++) {
//       const char = gridRow[j];
//       if (char === ROCK_CHAR) {
//         const temp = canOverwriteLowerValues ? i + offset : groundLevels[j - 1];
//         groundLevels[j - 1] = temp === null ? i + offset : temp;
//       }
//     }
//   }

//   return groundLevels;
// }

// function hasCollision(rockStack: number[], rockPositions: number[]): CollisionPoint[] {
//   let collision: CollisionPoint[] = [];
//   for (let i = 0; i < rockStack.length; i++) {
//     const rockRow = rockStack[i];
//     const rockPosition = rockPositions[i];
//     rockRow === rockPosition && collision.push([i, rockRow]);
//   }
//   return collision;
// }

// for (let i = 0; i < 2; i++) {
//   const rock = rocks[i];
//   let falling = true;
//   const rockWidth = getRockWidth(rock);
//   let horizontalPosition = 2;
//   state.groundLevel = calculateRockPositions(state.stack, 0);
//   let verticalPosition = getMaxGroundLevel() + SPAWN_HEIGHT;

//   do {
//     const jet = jets[state.currentJetIndex];
//     horizontalPosition =
//       jet === "<" ? Math.max(0, horizontalPosition - 1) : Math.min(WIDTH - rockWidth, horizontalPosition + 1);
//     verticalPosition = Math.max(0, verticalPosition - 1);
//     const rockGrid = gridifyRock(rock, horizontalPosition);
//     state.currentJetIndex = (state.currentJetIndex + 1) % state.maxJetIndex;
//     const collisions = hasCollision(state.groundLevel, calculateRockPositions(rockGrid, verticalPosition, null, false));
//     if (collisions.length > 0) {
//       console.log("Collision detected at: ", collisions);
//       state.stack = rockGrid.concat(state.stack);
//       falling = false;
//     }
//   } while (falling);
// }

// console.log(state.stack.join("\n"));

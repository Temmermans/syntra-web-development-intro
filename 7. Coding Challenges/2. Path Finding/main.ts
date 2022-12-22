// prettier-ignore
const maze = [
    "xxxxxxxxxx x",
    "x        x x",
    "x        x x",
    "x xxxxxxxx x", 
    "x          x", 
    "x xxxxxxxxxx"
];

const mazeResult = [
  { x: 10, y: 0 },
  { x: 10, y: 1 },
  { x: 10, y: 2 },
  { x: 10, y: 3 },
  { x: 10, y: 4 },
  { x: 9, y: 4 },
  { x: 8, y: 4 },
  { x: 7, y: 4 },
  { x: 6, y: 4 },
  { x: 5, y: 4 },
  { x: 4, y: 4 },
  { x: 3, y: 4 },
  { x: 2, y: 4 },
  { x: 1, y: 4 },
  { x: 1, y: 5 },
];

type Point = { x: number; y: number };
const dir = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  // 1. base case: off the map
  if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) {
    return false;
  }
  // 2. base case: hit a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }
  // 3. base case: found the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }
  // 4. base case: if we have already been here
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // 5. recurse
  // pre
  seen[curr.y][curr.x] = true;
  path.push(curr);
  // recurse
  for (const [dx, dy] of dir) {
    const next = { x: curr.x + dx, y: curr.y + dy };
    if (walk(maze, wall, next, end, seen, path)) {
      return true;
    }
  }
  // post
  path.pop();

  return false;
}

function maze_solver(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const seen = maze.map((row) => row.split("").map((_) => false));
  const path: Point[] = [];
  walk(maze, wall, start, end, seen, path);
  return path;
}

const result = maze_solver(maze, "x", { x: 10, y: 0 }, { x: 1, y: 5 });

console.log(result);

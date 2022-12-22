package main

import (
	"fmt"
	"strings"
)

func mapper[T, U any](data []T, f func(T) U) []U {
	res := make([]U, 0, len(data))
	for _, e := range data {
		res = append(res, f(e))
	}
	return res
}

var maze = []string{
	"xxxxxxxxxx x",
	"x        x x",
	"x        x x",
	"x xxxxxxxx x",
	"x          x",
	"x xxxxxxxxxx",
}
var dir = [][]int{
	{-1, 0}, // up
	{0, 1},  // right
	{1, 0},  // down
	{0, -1}, // left
}

type Point struct {
	x, y int
}

func walk(maze []string, wall string, curr, end Point, seen [][]bool, path *[]Point) bool {
	// 1. base case: off the map
	if curr.x < 0 || curr.x >= len(maze[0]) || curr.y < 0 || curr.y >= len(maze) {
		return false
	}
	// 2. base case: hit a wall
	if maze[curr.y][curr.x] == wall[0] {
		return false
	}
	// 3. base case: found the end
	if curr.x == end.x && curr.y == end.y {
		*path = append(*path, end)
		return true
	}
	// 4. base case: if we have already been here
	if seen[curr.y][curr.x] {
		return false
	}

	// 5. recurse
	// pre
	seen[curr.y][curr.x] = true
	*path = append(*path, curr)
	// recurse
	for _, d := range dir {
		if walk(maze, wall, Point{curr.x + d[0], curr.y + d[1]}, end, seen, path) {
			return true
		}
	}
	// post -> pop off last element
	*path = (*path)[:len(*path)-1]
	return false
}

func maze_solver(maze []string, wall string, curr, end Point) []Point {
	var seen = mapper(maze, func(row string) []bool {
		return mapper(strings.Split(row, ""), func(cell string) bool {
			return false
		})
	})
	var path = []Point{}
	walk(maze, wall, curr, end, seen, &path)
	return path
}

func main() {
	var result []Point = maze_solver(maze, "x", Point{10, 0}, Point{1, 5})
	fmt.Println(result)
}

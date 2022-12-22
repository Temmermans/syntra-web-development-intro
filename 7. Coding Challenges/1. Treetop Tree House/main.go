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

func every[T any, U bool](data []T, f func(T) U) bool {
	for _, e := range data {
		if f(e) == true {
			return true
		}
	}

	return false
}

func main() {
	trees := `30373
25512
65332
33549
35390`

	rows := strings.Split(trees, "\n")
	visible := 0

	for i, row := range rows {
		columns := strings.Split(row, "")

		if i == 0 || i == len(rows)-1 {
			visible += len(columns)
		} else {
			for j, column := range columns {
				if j == 0 || j == len(columns)-1 {
					visible += 1
				} else {
					numbersAbove := mapper(rows[0:i], func(row string) string {
						return string(row[j])
					})
					numbersBelow := mapper(rows[i+1:], func(row string) string {
						return string(row[j])
					})
					numbersLeft := strings.Split(row, "")[0:j]
					numbersRight := strings.Split(row, "")[j+1:]

					biggerThanAbove := every(numbersAbove, func(n string) bool {
						return n < column
					})
					biggerThanBelow := every(numbersBelow, func(n string) bool {
						return n < column
					})
					biggerThanLeft := every(numbersLeft, func(n string) bool {
						return n < column
					})
					biggerTHanRight := every(numbersRight, func(n string) bool {
						return n < column
					})

					if biggerThanAbove || biggerThanBelow || biggerThanLeft || biggerTHanRight {
						visible += 1
					}
				}
			}
		}
	}

	fmt.Println(visible)
}

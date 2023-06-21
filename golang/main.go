package main

import (
	"fmt"
	"strings"
)

func countString(data string) {
	libs := []string{
		"one",
		"two",
		"three",
		"four",
	}

	datas := strings.Fields(data)

	result := make(map[string]int)

	for _, item := range datas {
		item = strings.ToLower(item)
		for _, lib := range libs {
			if item == lib {
				result[lib]++
				break
			}
		}
	}

	for item, count := range result {
		fmt.Printf("%s => %d\n", item, count)
	}
}

func main() {
	countString("Four One two two three Three three four  four   four")
}

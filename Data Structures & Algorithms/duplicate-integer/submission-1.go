import (
	"slices"
)

func hasDuplicate(nums []int) bool {
   var yeet = []int{}
   for _, num := range nums{
	if !slices.Contains(yeet, num){
		yeet = append(yeet, num)

	} else {
		return true
	}
	}
	return false
}

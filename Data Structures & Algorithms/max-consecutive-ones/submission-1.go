
import (
    "slices"
)
func findMaxConsecutiveOnes(nums []int) int {
    consOnes := 0
    results := []int{}
    for _ , num := range nums {
        fmt.Println(results)
        if num == 1 {
            consOnes++
        } 
        if num != 1 {
         results = append(results, consOnes)
         consOnes = 0   
        }
       
    }
     results = append(results, consOnes)
    return slices.Max(results)
}
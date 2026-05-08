
// import (
//     "slices"
// )
func findMaxConsecutiveOnes(nums []int) int {
    // consOnes := 0
    // results := []int{}
    // for _ , num := range nums {
    //     if num == 1 {
    //         consOnes++
    //     } 
    //     if num != 1 {
    //      results = append(results, consOnes)
    //      consOnes = 0   
    //     }
       
    // }
    //  results = append(results, consOnes)
    // return slices.Max(results)

	res := 0
	cnt := 0

	for _, v := range nums{
		if v == 0 {
			if cnt > res  {
				res = cnt
			}
			
			cnt = 0
		} else {
			cnt++
		}
	}
	if cnt > res  {
		res = cnt
	}
	 return res
}
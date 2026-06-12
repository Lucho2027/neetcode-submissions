class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        
      // need to look at each value in arr 
      // if curVal in arr is the same as val
      const res = []
      for(let i = 0; i < nums.length; i++){
            const curValI = nums[i]
            console.log(curValI, curValI !== val)
            if(curValI !== val){
                res.push(curValI)
            }
      }
      for(let i = 0; i < res.length; i++){
        nums[i] = res[i]
      }
      console.log(nums)
        return res.length
        
    }
}

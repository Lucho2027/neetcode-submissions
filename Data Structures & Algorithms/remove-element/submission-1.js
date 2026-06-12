class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        
    // #### Brute  force
    //   const res = []
    //   for(let i = 0; i < nums.length; i++){
    //         const curValI = nums[i]
    //         console.log(curValI, curValI !== val)
    //         if(curValI !== val){
    //             res.push(curValI)
    //         }
    //   }
    //   for(let i = 0; i < res.length; i++){
    //     nums[i] = res[i]
    //   }
    //     return res.length

    let k = 0 
    for(let i = 0; i < nums.length;i++){
        if(nums[i] !== val){
            nums[k] = nums[i]
            k++
        }
    }
    return k

    }
}

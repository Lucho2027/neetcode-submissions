class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const result = []
        for(let i = 0; i < nums.length; ++i){
            const currValF = nums[i];
            for(let j = nums.length; j >= 0;--j){
                const currValR=nums[j]
               
                const add = currValF + currValR;
                if(add === target && i !== j){
                
                    result.push(i, j)
                    return result.sort((a,b) => a - b)
                }
            }
        }
    }
}

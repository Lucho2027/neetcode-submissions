class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const repArr = []
        for(let i = 0; i<nums.length;++i){
            const currVal = nums[i];
            if(!repArr.includes(currVal)){
                repArr.push(currVal)
            } else {
                return true
            }
        }
        return false
    }
}

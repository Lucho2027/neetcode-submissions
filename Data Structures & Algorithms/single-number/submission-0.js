class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {

        const set = new Set()

        for (let num of nums){
            console.log(num)
            if(!set.has(num)){
                set.add(num)
            } else {
                set.delete(num)
            }
        }
        console.log(set)
        return set.values().next().value
    }
}

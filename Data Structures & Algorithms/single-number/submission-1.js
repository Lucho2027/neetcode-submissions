class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {

        // const set = new Set()

        // for (let num of nums){
        //     if(!set.has(num)){
        //         set.add(num)
        //     } else {
        //         set.delete(num)
        //     }
        // }
        // return set.values().next().value
        // ########### Using bit manipulation

        let res = 0
        for(let n of nums){
            console.log('n', n, 'res', res, 'before')
            res = res ^ n
            
            console.log('n', n, 'res', res, 'after')

        }
        return res
    }
}

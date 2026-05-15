class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const numMaps = new Map();
        const freq = Array.from({length: nums.length + 1}, () => [])
        const res = [];

        for(let i = 0; i < nums.length; i++){
            if(!numMaps.has(nums[i])){
                numMaps.set(nums[i], 1)
            } else {
                numMaps.set(nums[i], numMaps.get(nums[i]) + 1 )
            }
        }

       numMaps.forEach((value, key)=> {
            freq[value].push(parseInt(key))
       })
       

       for (let i = freq.length - 1; i > 0; i--){
            for(const num of freq[i]){
                res.push(num)
                if(res.length === k) return res
            }
       }
    }
}

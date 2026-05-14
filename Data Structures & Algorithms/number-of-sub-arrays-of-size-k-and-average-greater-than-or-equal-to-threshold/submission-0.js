class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
         let curSum = 0;
         let result = 0;

        for (let i = 0; i < k - 1; i++){
            let curVal = arr[i]
            console.log({i, curVal, curSum})
            curSum += curVal
        }

        for( let L = 0; L <= arr.length - k; L++){
            curSum += arr[L + k - 1];
            if(curSum / k >= threshold){
                result++;
            }
            curSum -= arr[L]
        }
        return result;
    }
}

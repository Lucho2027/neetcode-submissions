class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let k = 0
    for (let i = 0; i < arr.length; i++){

        arr[k] = Math.max( ...arr.slice(i+1, arr.length))
        k++
    }  
    arr[arr.length - 1] = -1
    return  arr
    }
}

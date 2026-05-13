class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // Bruteforce  below

        // let maxProfit = 0;

        // for(let i = 0; i < prices.length; i++){
        //     const currVal = prices[i];
        //     for(let j = i + 1; j < prices.length; j++){
        //         const currVal2 = prices[j]
        //         maxProfit = Math.max(maxProfit, currVal2 - currVal)
        //     }
        // }
        // return maxProfit

        let [l, r] = [0 , 1] // left=buy right=sell

        let maxProfit = 0

        while(r < prices.length){
            // profitable
            if (prices[l] < prices[r]){
                let profit = prices[r] - prices[l]
                maxProfit = Math.max(maxProfit, profit)
            } else {
                l = r
            }
            r++
        }
        return maxProfit
    }
}

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // lets start with 2 pointers

        let maxProfit = 0;

        for(let i = 0; i < prices.length; i++){
            const currVal = prices[i];
            for(let j = i + 1; j < prices.length; j++){
                const currVal2 = prices[j]
                maxProfit = Math.max(maxProfit, currVal2 - currVal)
            }
        }
        return maxProfit
    }
}

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [low, high, max] = [0, 1, 0];

    while (high < prices.length) {
        if (prices[low] >= prices[high]) low = high;
        max = Math.max(max, prices[high] - prices[low]);
        high++;
    }

    return max;
};
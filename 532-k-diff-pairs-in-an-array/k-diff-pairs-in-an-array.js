/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    let cache = new Map();
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const pair = `${nums[i]}, ${nums[j]}`;
            const reversePair = `${nums[j]}, ${nums[i]}`;
            if (Math.abs(nums[i] - nums[j]) === k && !cache.has(pair) && !cache.has(reversePair)) {
                count++;
                cache.set(pair, 1);
            }
        }
    }

    return count;
};
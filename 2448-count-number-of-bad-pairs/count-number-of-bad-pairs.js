/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    const totalPairs = l => l * (l - 1) / 2;
    let res = totalPairs(nums.length);
    let map = new Map();

    for (let i = 0;  i < nums.length; i++) {
        const dif = nums[i] - i
        map.set(dif, (map.get(dif) || 0) + 1);
    }

    for (let [key, val] of map) {
        res -= totalPairs(val);
    }

    return res;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    nums.forEach(num => {
        map.set(num, (map.get(num) || 0) + 1);
    });

    const keys = [...map.keys()].sort((a, b) => map.get(b) - map.get(a));
    const res = [];
    for (let i = 0; i < k; i++) {
        res.push(keys[i]);
    }
    return res;
};
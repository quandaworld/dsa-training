/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const cache = new Map();

    nums.forEach(num => {
        if (num === 0) cache.set(0, (cache.get(0) || 0) + 1);
        if (num === 1) cache.set(1, (cache.get(1) || 0) + 1);
        if (num === 2) cache.set(2, (cache.get(2) || 0) + 1);
    });

    nums.length = 0;

    for (let i = 0; i < cache.get(0); i++) nums.push(0);
    for (let i = 0; i < cache.get(1); i++) nums.push(1);
    for (let i = 0; i < cache.get(2); i++) nums.push(2);
}
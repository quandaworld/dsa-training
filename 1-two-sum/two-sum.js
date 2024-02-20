/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    nums.forEach((num, index) => {
        map.set(num, index);
    });
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement) && i !== map.get(complement)) {
            return [i, map.get(complement)];
        }
    }
};
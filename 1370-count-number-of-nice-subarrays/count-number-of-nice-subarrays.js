/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    let arr = nums.map(num => num % 2 === 0 ? 0 : 1);
    let map = new Map();
    map.set(0, 1);
    let prefixSum = 0;
    let res = 0;

    for (let num of arr) {
        prefixSum += num;

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);

        if (map.has(prefixSum - k)) {
            res += map.get(prefixSum - k);
        }
    }

    return res;
};
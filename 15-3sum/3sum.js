/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const ans = new Map();

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        // if (nums[i] === nums[i - 1]) continue;
        let [j, k] = [i + 1, nums.length - 1];
        while (j < k) {
            if (-nums[i] > nums[j] + nums[k]) {
                j++;
            } else if (-nums[i] < nums[j] + nums[k]) {
                k--;
            } else {
                ans.set([nums[i], nums[j], nums[k]].join(''), [nums[i], nums[j], nums[k]]); 
                j++;
                k--;
                // while (nums[j] === nums[j - 1]) j++;
            }
        }
    }

    return [...ans.values()];
};
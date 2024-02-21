/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0;

    nums.sort((a, b) => a - b);
    let longest = 1;
    const longestLength = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            longest++;
        } else if (nums[i] === nums[i + 1]) {
            continue;
        } else {
            longestLength.push(longest);
            longest = 1;
        }
    }

    return Math.max(...longestLength);
};
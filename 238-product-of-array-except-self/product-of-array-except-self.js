/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const preArr = [1];
    const postArr = [1];
    const res = [];
    let pre = 1;
    let post = 1;

    for (let i = 1; i < nums.length; i++) {
        pre *= nums[i - 1];
        preArr.push(pre);
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        post *= nums[i + 1];
        postArr.unshift(post);
    }

    for (let i = 0; i < nums.length; i++) {
        res[i] = preArr[i] * postArr[i];
    }

    return res;
};
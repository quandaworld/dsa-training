/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0;
    let [l, r] = [0, height.length - 1];

    while (l < r) {
        const water = (r - l) * Math.min(height[l], height[r]);
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
        maxWater = Math.max(maxWater, water);
    }

    return maxWater;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    nums.sort((a, b) => b - a);
    const map = new Map();
    nums.forEach(num => map.set(num, (map.get(num) || 0) + 1));

    let max = 1;
    for (let num of nums) {
        let next = Math.sqrt(num);
        let maxCur = 1;

        map.set(num, map.get(num) - 1);
        while (map.has(next) && map.get(next) >= 2) {
            maxCur += 2;
            map.set(next, map.get(next) - 2);
            next = Math.sqrt(next);
        }
        
        max = Math.max(max, maxCur);
    }
    return max;
};
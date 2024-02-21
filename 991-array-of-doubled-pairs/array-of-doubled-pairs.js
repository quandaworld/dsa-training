/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
    arr.sort((a, b) => Math.abs(a) - Math.abs(b));
    const map = new Map();
    let len = 0;

    for (let num of arr) {
        if (map.has(num) && map.get(num) !== 0) {
            map.set(num, map.get(num) - 1);
            len += 2;
        } else [
            map.set(num * 2, (map.get(num * 2) || 0) + 1)
        ]
    }

    return len === arr.length;
};
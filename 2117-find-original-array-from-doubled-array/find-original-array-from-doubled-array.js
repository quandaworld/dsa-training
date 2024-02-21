/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    const res = [];
    changed.sort((a, b) => a - b);
    const map = new Map();

    for (let num of changed) {
        if (map.has(num) && map.get(num) !== 0) {
            res.push(num);
            map.set(num, map.get(num) - 1);
        } else {
            map.set(num * 2, (map.get(num * 2) || 0) + 1);
        }
    }
    
    if (res.length !== changed.length / 2) return [];
    return res.map(num => num / 2);
};
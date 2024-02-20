/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map();
    s.split('').forEach(char => {
        map.set(char, (map.get(char) || 0) + 1);
    })

    for (let key of map.keys()) {
        if (map.get(key) === 1) return s.indexOf(key);
    }

    return -1;
};
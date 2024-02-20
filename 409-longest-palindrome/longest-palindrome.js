/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const letters = s.split('');
    const map = new Map();
    let len = 0;

    for (let letter of letters) {
        if (map.has(letter) && map.get(letter) !== 0) {
            len += 2;
            map.set(letter, map.get(letter) - 1);
        } else {
            map.set(letter, (map.get(letter) || 0) + 1);
        }
    }

    for (let letter of map.keys()) {
        if (map.get(letter)) return ++len;
    }

    return len;
};
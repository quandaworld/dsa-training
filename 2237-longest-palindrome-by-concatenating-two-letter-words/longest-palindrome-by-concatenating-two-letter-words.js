/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    const reverseStr = (str) => str.split('').reverse().join('');
    const map = new Map();
    let len = 0;

    for (let str of words) {
        if (map.has(str) && map.get(str) > 0) {
            len += 4;
            map.set(str, map.get(str) - 1);
        } else {
            const revStr = reverseStr(str);
            map.set(revStr, (map.get(revStr) || 0) + 1);
        }
    }

    for (let str of map.keys()) {
        if (str[0] === str[1] && map.get(str) !== 0) {
            len += 2;
            return len;
        }
    }

    return len;
};
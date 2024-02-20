/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    for (let char of s) {
        const indexChar = t.indexOf(char);
        if (indexChar === -1) return false;
        t = t.slice(indexChar + 1);
    }
    return true;
};
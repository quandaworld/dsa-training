/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let pre = strs[0];

    for (let i = 1; i < strs.length; i++) {
        for (let j = pre.length - 1; j >= 0; j--) {
            if (pre[j] !== strs[i][j]) {
                pre = pre.slice(0, j);
            }
        }
    }

    return pre;
};
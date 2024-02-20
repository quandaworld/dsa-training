/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let [l, max] = [0, 0];

    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++
        }
        set.add(s[r]);
        max = Math.max(max, set.size);
    }

    return max;
};
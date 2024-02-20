/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // const arr = s.split(' ').filter(el => el !== '');
    // return arr[arr.length - 1].length;
    let len = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            len++;
            if (s[i - 1] === ' ') break;
        }
    }
    return len;
};
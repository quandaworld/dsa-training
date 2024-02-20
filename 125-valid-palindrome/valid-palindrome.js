/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // let convertedS = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    // return (convertedS === convertedS.split('').reverse().join(''));

    if (s.length <= 1) return true;

    let [left, right] = [0, s.length - 1];
    while (left < right) {
        if (!/[a-z0-9]/i.test(s[left])) {
            left++;
        } else if (!/[a-z0-9]/i.test(s[right])) {
            right--;
        } else {
            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            left++;
            right--;
        }
    }

    return true;
};
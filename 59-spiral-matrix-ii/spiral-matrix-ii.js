/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const size = n * n;
    const res = new Array(n).fill().map(el => new Array(n));
    let el = 1;
    let top = 0;
    let left = 0;
    let right = n - 1;
    let bottom = n - 1;

    while (el <= size) {
        for (let i = left; i <= right && el <= size; i++) {
            res[top][i] = el++;
        }
        top++;

        for (let i = top; i <= bottom && el <= size; i++) {
            res[i][right] = el++;
        }
        right--;

        for (let i = right; i >= left && el <= size; i--) {
            res[bottom][i] = el++;
        }
        bottom--;

        for (let i = bottom; i >= top && el <= size; i--) {
            res[i][left] = el++;
        }
        left++;
    }

    return res;
};
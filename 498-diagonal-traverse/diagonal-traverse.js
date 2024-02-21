/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const r = mat.length;
    const c = mat[0].length;
    const res = new Array(r + c - 1).fill().map(el => []);

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            res[i + j].push(mat[i][j]);
        }
    }

    for (let i = 0; i < res.length; i += 2) {
        res[i].reverse();
    }

    return res.flat();
};
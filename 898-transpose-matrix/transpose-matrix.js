/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const res = new Array(matrix[0].length).fill().map(el => new Array(matrix.length));

    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            res[i][j] = matrix[j][i];
        }
    }

    return res;
};
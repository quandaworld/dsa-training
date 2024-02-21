/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if (r * c !== mat.length * mat[0].length) return mat;
    
    const res = new Array(r).fill().map(el => new Array(c));
    const flatMat = mat.flat();

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            res[i][j] = flatMat[0];
            flatMat.shift();
        }
    }
 
    return res;
};
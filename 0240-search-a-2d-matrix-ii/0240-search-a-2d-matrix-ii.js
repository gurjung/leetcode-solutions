/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    // approach -> O (m + n)
    // explore row = n-1 and column = 0

    let n = matrix.length;
    let m = matrix[0].length;

    let row = n - 1;
    let col = 0;

    while (row >= 0 && col < m) {
        let val = matrix[row][col];
        if (val === target) {
            return true;
        }
        if (val > target) {
            row--;
        } else {
            col++;
        }
    }

    return false;
};
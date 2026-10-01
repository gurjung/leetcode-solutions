/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let row = m - 1;
    let col = 0;

    while (row >= 0 && col < n) {
        let val = matrix[row][col]
        if (val === target) {
            return true;
        }

        if (val > target) {
            row--;
        } else {
            col++;
        }
    }

    return false
};
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let u = 0;
    let l = 0;
    let r = n - 1;
    let d = m - 1;

    let res = [];
    let counter = 0;

    while (u <= d && l <= r) {
        if (counter === 0) {
            // l to r and fix is u

            for (let i = l; i <= r; i++) {
                res.push(matrix[u][i])
            }
            u++;
        }
        if (counter === 1) {
            // u to d and fix is r
            for (let i = u; i <= d; i++) {
                res.push(matrix[i][r])
            }
            r--;
        }

        if (counter === 2) {
            // r to l and fix is d
            for (let i = r; i >= l; i--) {
                res.push(matrix[d][i])
            }
            d--;
        }

        if (counter === 3) {
            // d to u and fix is l
            for (let i = d; i >= u; i--) {
                res.push(matrix[i][l])
            }
            l++;
        }
        counter++;
        counter = counter % 4;
    }
    return res
};

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let result = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        for (let k = 0; k < 31; k++) {
            if (((1 << k) & i) > 0) {
                result[i] = result[i] + 1
            }
        }
    }

    return result
};
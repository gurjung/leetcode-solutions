/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    // x = 2.10000, n = 3 -> x^2 * x
    // x = 2.10000, n = 2
    // x = 2.10000, n = 1
    function recur(num, pow) {
        if (pow === 0) {
            return 1
        }

        let val = recur(num, Math.floor(pow / 2));
        //check for odd even
        if (pow % 2 === 0) {
            return val * val;
        }
        return val * val * num;
    }

    let sign = 0;

    if (n < 0) {
        sign = 1
    }

    // x = 2.00000, n = -3
    let res = recur(x, Math.abs(n))
    if (sign === 1) {
        return 1 / res;
    }
    return res
};
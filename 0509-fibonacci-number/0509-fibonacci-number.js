/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    // approach 1 -> recursion

    function recur(num) {
        // base condition
        if (num === 0 || num === 1) {
            return num
        }

        return recur(num - 1) + recur(num - 2)
    }

    return recur(n)
};
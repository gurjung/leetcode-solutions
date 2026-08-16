/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    // approach 1 -> recursion

    // function recur(num) {
    //     // base condition
    //     if (num === 0 || num === 1) {
    //         return num
    //     }

    //     return recur(num - 1) + recur(num - 2)
    // }

    // return recur(n)

    // approach 2 -> recursion + memo

    let dp = new Array(n + 1).fill(-1);
    dp[0] = 0;
    dp[1] = 1;

    function recur(num) {
        // base condition
        if (num === 0 || num === 1) {
            return num
        }

        if (dp[num] !== -1) {
            return dp[num]
        }

        dp[num] = recur(num - 1) + recur(num - 2)
        return dp[num]
    }

    return recur(n)
};
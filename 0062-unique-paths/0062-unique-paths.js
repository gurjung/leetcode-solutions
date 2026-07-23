/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    // m = 3, n = 2
    // // recursion

    // function recur(i, j) {
    //     // base case
    //     if (j > n || i > m) return 0;

    //     if (i === m - 1 && j === n - 1) {
    //         return 1;
    //     }
    //     // two choices
    //     // go right
    //     let right = recur(i, j + 1);
    //     let down = recur(i + 1, j);
    //     return right + down
    // }

    // return recur(0, 0)

    // recursion + memo
    let dp = [];

    for (let i = 0; i <= m; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            dp[i][j] = -1;
        }
    }

    function recur(i, j) {
        // base case
        if (j > n || i > m) return 0;

        if (i === m - 1 && j === n - 1) {
            return 1;
        }

        if (dp[i][j] !== -1) {
            return dp[i][j]
        }
        // two choices
        // go right
        let right = recur(i, j + 1);
        let down = recur(i + 1, j);
        dp[i][j] = right + down;
        return dp[i][j]
    }

    return recur(0, 0)
};
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {

    // m = 3, n = 2
    // o/p = 3

    // Approach 1 -> recursion

    // function isValid(r, c) {
    //     if (r < 0 || r >= m || c < 0 || c >= n) {
    //         return false;
    //     }

    //     return true;
    // }


    // function recur(i, j) {
    //     // base case

    //     if (!isValid(i, j)) return 0;

    //     if (i === m - 1 && j === n - 1) {
    //         return 1;
    //     }

    //     let right = recur(i, j + 1);
    //     let down = recur(i + 1, j);

    //     return right + down;
    // }

    // return recur(0, 0)

    // Approach 2 -> recursion + memo

    let dp = [];

    for (let i = 0; i < m; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            dp[i][j] = -1;
            if (i === m - 1 && j === n - 1) {
                dp[i][j] = 1
            }
        }
    }

    function isValid(r, c) {
        if (r < 0 || r >= m || c < 0 || c >= n) {
            return false;
        }

        return true;
    }


    function recur(i, j) {
        // base case

        if (!isValid(i, j)) return 0;

        if (i === m - 1 && j === n - 1) {
            return 1;
        }

        if (dp[i][j] !== -1) {
            return dp[i][j]
        }

        let right = recur(i, j + 1);
        let down = recur(i + 1, j);

        dp[i][j] = right + down;
        return dp[i][j];
    }

    return recur(0, 0)
};
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let dp = [];
    for (let i = 0; i <= m; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {

            dp[i][j] = -1;
        }
    }
    function recur(i, j) {
        // two paths
        if (i === m - 1 && j === n - 1) {
            return 1
        }

        if (i < 0 || i >= m || j < 0 || j >= n) {
            return 0
        }

        if (dp[i][j] !== -1) {
            return dp[i][j]
        }

        let right = recur(i, j + 1);
        let down = recur(i + 1, j);

        dp[i][j] = right + down;
        return dp[i][j]
    }

    return recur(0, 0)
};
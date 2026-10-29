/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    // let m = grid.length;
    // let n = grid[0].length;

    // function recur(i, j) {
    //     if (i === m - 1 && j === n - 1) {
    //         return grid[i][j]
    //     }

    //     if (i < 0 || i >= m || j < 0 || j >= n) {
    //         return Infinity;
    //     }

    //     // two paths
    //     let currVal = grid[i][j];
    //     let right = recur(i, j + 1);
    //     let down = recur(i + 1, j);

    //     return currVal + Math.min(right, down)

    // }

    // return recur(0, 0)

    // recursion + memo

    let m = grid.length;
    let n = grid[0].length;

    let dp = [];

    for (let i = 0; i <= m; i++) {
        dp[i] = [];

        for (let j = 0; j <= n; j++) {
            dp[i][j] = -1;
        }
    }

    function recur(i, j) {
        if (i === m - 1 && j === n - 1) {
            return grid[i][j]
        }

        if (i < 0 || i >= m || j < 0 || j >= n) {
            return Infinity;
        }

        if (dp[i][j] !== -1) {
            return dp[i][j];
        }

        // two paths
        let currVal = grid[i][j];
        let right = recur(i, j + 1);
        let down = recur(i + 1, j);

        dp[i][j] = currVal + Math.min(right, down)
        return dp[i][j];

    }

    return recur(0, 0)
};
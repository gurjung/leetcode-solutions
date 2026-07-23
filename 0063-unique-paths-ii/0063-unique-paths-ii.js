/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    // recursion

    // let m = obstacleGrid.length;
    // let n = obstacleGrid[0].length;

    // function recur(i, j) {
    //     // base case
    //     if (j >= n || i >= m) return 0;

    //     if (obstacleGrid[i][j] === 1) return 0;

    //     if (i === m - 1 && j === n - 1 && obstacleGrid[i][j] !== 1) {
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

    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    let dp = [];

    for (let i = 0; i <= m; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            dp[i][j] = -1;
        }
    }

    function recur(i, j) {
        // base case
        if (j >= n || i >= m) return 0;

        if (obstacleGrid[i][j] === 1) return 0;

        if (i === m - 1 && j === n - 1 && obstacleGrid[i][j] !== 1) {
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
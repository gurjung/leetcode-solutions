/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;


    let dp = [];
    for (let i = 0; i <= m; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {

            dp[i][j] = -1;
        }
    }

    function isObstacle(row, col) {
        if (obstacleGrid[row][col] === 1) {
            return true
        }
        return false;
    }
    function recur(i, j) {
        // two paths

        if (i === m - 1 && j === n - 1 && !isObstacle(i, j)) {
            return 1
        }

        if (i < 0 || i >= m || j < 0 || j >= n || isObstacle(i, j)) {
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
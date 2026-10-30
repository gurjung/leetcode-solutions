/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    // let q = [];
    let visitedArr = [];

    for (let i = 0; i < m; i++) {
        visitedArr[i] = [];
        for (let j = 0; j < n; j++) {
            visitedArr[i][j] = false;
        }
    }

    let dx = [1, -1, 0, 0];
    let dy = [0, 0, -1, 1];

    function isValid(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return false;
        }
        return true;
    }

    function recur(r, c) {
        visitedArr[r][c] = true;

        for (let k = 0; k < 4; k++) {
            let row = r + dx[k];
            let col = c + dy[k];

            if (isValid(row, col) && !visitedArr[row][col] && grid[row][col] === "1") {
                recur(row, col)
            }
        }
    }

    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1" && !visitedArr[i][j]) {
                recur(i, j);
                ans++;
            }
        }
    }
    return ans;
};
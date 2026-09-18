/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    let ans = 0;
    let count = 0;
    let isEnclave = true;

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
        if (i >= m || i < 0 || j >= n || j < 0) {
            return false;
        }

        return true;
    }

    function isOnBoundary(i, j) {
        if (i === m - 1 || i === 0 || j === n - 1 || j === 0) {
            return true;
        }

        return false;
    }

    function recur(r, c) {
        visitedArr[r][c] = true;
        count++;

        if (isOnBoundary(r, c)) {
            isEnclave = false;
        }

        for (let k = 0; k < 4; k++) {
            let row = r + dx[k];
            let col = c + dy[k];

            if (isValid(row, col) && grid[row][col] === 1 && !visitedArr[row][col]) {
                recur(row, col)
            }
        }

    }


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visitedArr[i][j] && grid[i][j] === 1) {
                isEnclave = true;
                count = 0;
                recur(i, j)
                if (isEnclave) {
                    ans = ans + count
                }
            }

        }
    }

    return ans;
};
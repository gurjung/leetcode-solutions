/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    if (grid[0][0] === 1) return -1;
    if (grid[m - 1][n - 1] === 1) return -1;

    let dx = [1, -1, 0, 0, -1, 1, -1, 1]; // diagonal included
    let dy = [0, 0, -1, 1, -1, 1, 1, -1]; // diagonal included

    let visitedArr = [];

    for (let i = 0; i < m; i++) {
        visitedArr[i] = []
        for (let j = 0; j < n; j++) {
            visitedArr[i][j] = false;
        }
    }

    function isValid(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return false;
        }

        return true;
    }

    let q = [{ r: 0, c: 0, dist: 1 }];
    visitedArr[0][0] = true;

    while (q.length) {
        let curr = q.shift();
        let { r, c, dist } = curr;


        if (r === m - 1 && c === n - 1) {
            return dist
        }

        for (let k = 0; k < 8; k++) {
            let row = r + dx[k];
            let col = c + dy[k];

            if (isValid(row, col) && !visitedArr[row][col] && grid[row][col] === 0) {
                visitedArr[row][col] = true;
                q.push({ r: row, c: col, dist: dist + 1 })
            }
        }
    }

    return -1;
};
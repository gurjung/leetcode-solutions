/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    // bfs -> because all edges have same cost

    let m = grid.length;
    let n = grid[0].length;

    if (grid[0][0] === 1) return -1;
    if (grid[m - 1][n - 1] === 1) return -1;

    // let result = [];
    let visitedArr = [];

    for (let i = 0; i < m; i++) {
        // result[i] = [];
        visitedArr[i] = [];
        for (let j = 0; j < n; j++) {
            // result[i][j] = -1;
            visitedArr[i][j] = false;
        }
    }

    let length = 1;

    let dx = [1, -1, 0, 0, -1, -1, 1, 1]; // btlr, ul, ur, bl, br
    let dy = [0, 0, -1, 1, -1, 1, -1, 1];

    let q = [{ r: 0, c: 0, dist: 1 }]

    visitedArr[0][0] = true;

    function isValid(i, j) {
        if (i >= m || i < 0 || j >= n || j < 0) {
            return false;
        }
        return true;
    }

    while (q.length) {
        let curr = q.shift();
        let { r, c, dist } = curr;

        if (r === m - 1 && c === n - 1) {
            return dist;
        }
        // result[r][c] = dist;

        for (let k = 0; k < 8; k++) {
            let row = r + dx[k];
            let col = c + dy[k];

            if (isValid(row, col) && !visitedArr[row][col] && grid[row][col] === 0) {
                visitedArr[row][col] = true
                q.push({ r: row, c: col, dist: dist + 1 })
            }
        }
    }

    return -1;
};
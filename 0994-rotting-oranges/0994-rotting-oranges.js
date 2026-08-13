/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let time = 0;
    let fresh = 0;
    let q = [];


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                q.push([i, j])
            }
            if (grid[i][j] === 1) {
                fresh++;
            }
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

    while (q.length && fresh > 0) {
        time++;

        let qSize = q.length;

        while (qSize > 0) {
            let curr = q.shift();
            let [x, y] = curr;
            for (let k = 0; k < 4; k++) {
                let row = x + dx[k];
                let col = y + dy[k];

                if (isValid(row, col) && grid[row][col] === 1) {
                    q.push([row, col])
                    grid[row][col] = -1;
                    fresh--;
                }
            }
            qSize--;
        }

    }

    return fresh > 0 ? -1 : time;
};
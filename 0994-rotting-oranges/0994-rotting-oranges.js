/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let fresh = 0;
    let time = 0;

    let q = [];

    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    function isValid(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return false;
        }
        return true;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                fresh++;
            }
            if (grid[i][j] === 2) {
                q.push([i, j])
            }
        }
    }

    while (q.length && fresh > 0) {
        time++;
        let size = q.length;

        while (size > 0) {
            let curr = q.shift();
            let [x, y] = curr;
            for (let k = 0; k < 4; k++) {
                let row = x + dx[k];
                let col = y + dy[k];

                if (isValid(row, col) && grid[row][col] === 1) {
                    q.push([row, col])
                    fresh--;
                    grid[row][col] = -1;
                }

            }
            size--;
        }

    }

    return fresh === 0 ? time : -1;
};
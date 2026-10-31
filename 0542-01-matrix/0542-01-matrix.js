/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    // multisource bfs

    let m = mat.length;
    let n = mat[0].length;

    let visitedArr = [];
    let clone = [];

    for (let i = 0; i < m; i++) {
        visitedArr[i] = [];
        clone[i] = []
        for (let j = 0; j < n; j++) {
            visitedArr[i][j] = false;
            clone[i][j] = mat[i][j]
        }
    }

    let q = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visitedArr[i][j] && mat[i][j] === 0) {
                q.push([i, j]);
                visitedArr[i][j] = true;
            }

        }
    }

    let dx = [1, -1, 0, 0];
    let dy = [0, 0, -1, 1];

    function isValid(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return false
        }

        return true
    }

    while (q.length) {
        let curr = q.shift();
        let [r, c] = curr;

        for (let k = 0; k < 4; k++) {
            let row = r + dx[k];
            let col = c + dy[k];

            if (isValid(row, col) && !visitedArr[row][col]) {
                q.push([row, col])
                clone[row][col] = clone[r][c] + 1;
                visitedArr[row][col] = true
            }
        }
    }

    return clone


};
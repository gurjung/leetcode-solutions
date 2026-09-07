/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    // Approach -> Multi-source BFS

    let m = mat.length;
    let n = mat[0].length;

    let clone = mat.map((row) => [...row]);

    let visitedArr = [];

    for (let i = 0; i < m; i++) {
        visitedArr[i] = []
        for (let j = 0; j < n; j++) {
            visitedArr[i][j] = false
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

    let q = []

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                q.push([i, j]) // push all 0's and spread from there
                visitedArr[i][j] = true;
            }
        }
    }

    while (q.length) {
        let curr = q.shift();
        let [r, c] = curr;

        for (let k = 0; k < 4; k++) {
            let row = r + dx[k];
            let col = c + dy[k];

            if (isValid(row, col) && !visitedArr[row][col]) {
                q.push([row, col]);
                clone[row][col] = clone[r][c] + 1
                visitedArr[row][col] = true;
            }
        }

    }

    return clone;
};
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {


    let m = image.length;
    let n = image[0].length;


    let visitedArr = [];

    for (let i = 0; i <= m; i++) {
        visitedArr[i] = []
        for (let j = 0; j <= n; j++) {
            visitedArr[i][j] = false
        }
    }

    dx = [1, -1, 0, 0];
    dy = [0, 0, -1, 1];

    function isValid(i, j) {
        if (i >= m || i < 0 || j >= n || j < 0) {
            return false
        }
        return true;
    }

    function recur(r, c) {
        // base condition

        visitedArr[r][c] = true;
        clone[r][c] = color;

        for (let k = 0; k < 4; k++) {
            let row = r + dx[k];
            let col = c + dy[k];
            if (isValid(row, col) && !visitedArr[row][col]) {
                if (clone[row][col] === image[sr][sc]) {
                    recur(row, col)
                }

            }
        }
    }

    const clone = image.map(row => [...row]);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === sr && j === sc) {
                if (!visitedArr[i][j]) {
                    recur(i, j)
                }

            }
        }
    }

    return clone

};
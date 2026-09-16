/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    let clone = image.map((row) => [...row]);

    let dx = [1, -1, 0, 0];
    let dy = [0, 0, -1, 1];

    let m = image.length;
    let n = image[0].length;

    let visitedArr = [];

    for (let i = 0; i < m; i++) {
        visitedArr[i] = []
        for (let j = 0; j < n; j++) {
            visitedArr[i][j] = false;
        }
    }

    function isValid(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return false
        }

        return true
    }

    function recur(r, c, startColor) {
        visitedArr[r][c] = true;
        image[r][c] = color;

        for (let k = 0; k < 4; k++) {
            let row = r + dx[k];
            let col = c + dy[k];

            if (isValid(row, col) && !visitedArr[row][col] && clone[row][col] === startColor) {
                recur(row, col, startColor)
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === sr && j === sc) {
                recur(i, j, clone[sr][sc])
            }
        }
    }

    return image
};
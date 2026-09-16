/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
    let m = isWater.length;
    let n = isWater[0].length;
    // [[0,1],
    // [0,0]]
    let clone = isWater.map((row) => [...row]);

    let dx = [1, -1, 0, 0];
    let dy = [0, 0, -1, 1];

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

    let q = [];


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visitedArr[i][j] && isWater[i][j] === 1) {
                q.push([i, j]);
                visitedArr[i][j] = true
                clone[i][j] = 0;
            }
        }
    }

    let head = 0;
    while (head < q.length) {
        let curr = q[head++];
        let [r, c] = curr;

        for (let k = 0; k < 4; k++) {
            let row = r + dx[k];
            let col = c + dy[k];

            if (isValid(row, col) && !visitedArr[row][col]) {
                q.push([row, col]);
                clone[row][col] = clone[r][c] + 1;
                visitedArr[row][col] = true;
            }
        }
    }

    return clone


};
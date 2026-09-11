/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (matrix) {

    const n = matrix.length;
    const m = matrix[0].length;

    let result = 0;

    let dx = [1, -1, 0, 0];
    let dy = [0, 0, -1, 1];

    function isValid(i, j) {
        if (i >= n || i < 0 || j >= m || j < 0) {
            return false
        }

        return true;
    }

    function recur(r, c, id) {
        visitedArr[r][c] = true;
        matrix[r][c] = id;
        let currArea = 1;
        // calc area and assign corresponding id
        for (let b = 0; b < 4; b++) {
            let row = r + dx[b];
            let col = c + dy[b];

            if (isValid(row, col) && !visitedArr[row][col] && matrix[row][col] === 1) {
                currArea = currArea + recur(row, col, id)
            }
        }
        return currArea;
    }


    let visitedArr = [];

    for (let i = 0; i < n; i++) {
        visitedArr[i] = [];

        for (let j = 0; j < m; j++) {

            visitedArr[i][j] = false;
        }
    }

    let id = 1;
    let area = {} // to store area id wise

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!visitedArr[i][j] && matrix[i][j] === 1) {
                id++
                let currentArea = recur(i, j, id);
                area[id] = currentArea;
                result = Math.max(result, currentArea);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                let uniqueIslandSet = new Set();
                // explore 4 neighbors

                for (let b = 0; b < 4; b++) {
                    let row = i + dx[b];
                    let col = j + dy[b];

                    if (isValid(row, col) && matrix[row][col] > 1) {
                        // currArea = currArea + recur(row, col, id)
                        // add its ID to Set
                        let id = matrix[row][col]
                        uniqueIslandSet.add(id)
                    }
                }
                // calculate: 1 + all unique island areas
                let currArea = 1;
                for (let island of uniqueIslandSet) {
                    currArea = currArea + area[island]
                }
                result = Math.max(result, currArea)
            }
        }
    }
    return result
}

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    let m = heights.length;
    let n = heights[0].length;

    let dx = [1, -1, 0, 0];
    let dy = [0, 0, -1, 1];

    let pacificArr = [];
    let atlanticArr = [];

    for (let i = 0; i < m; i++) {
        pacificArr[i] = [];
        atlanticArr[i] = [];
        for (let j = 0; j < n; j++) {
            pacificArr[i][j] = false;
            atlanticArr[i][j] = false;
        }
    }

    function isValid(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return false;
        }
        return true;
    }

    let result = []

    function recur(r, c, visitedArr) {
        // mark current cell as visited
        visitedArr[r][c] = true;
        for (let k = 0; k < 4; k++) {
            let row = r + dx[k];
            let col = c + dy[k];
            if (isValid(row, col) && !visitedArr[row][col] && heights[row][col] >= heights[r][c]) {
                recur(row, col, visitedArr)
            }
        }

    }

    // top ocean to cells (pacific to cells from top)

    for (let i = 0; i < m; i++) {
        recur(i, 0, pacificArr)
    }

    // left ocean to cells (pacific to cells from left)

    for (let j = 0; j < n; j++) {
        recur(0, j, pacificArr)
    }

    // bottom ocean to cells (atlantic to cells from bottom)

    for (let j = 0; j < n; j++) {
        recur(m - 1, j, atlanticArr)
    }

    // right ocean to cells (atlantic to cells from right)

    for (let i = 0; i < m; i++) {
        recur(i, n - 1, atlanticArr)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacificArr[i][j] && atlanticArr[i][j]) {
                result.push([i, j])
            }
        }
    }
    return result
};
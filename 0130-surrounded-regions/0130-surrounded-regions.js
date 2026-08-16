/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let m = board.length;
    let n = board[0].length;

    let dx = [1, -1, 0, 0];
    let dy = [0, 0, -1, 1];

    function isValid(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return false
        }
        return true;
    }

    function recur(i, j) {
        // explore all directions
        board[i][j] = "#"; // to keep track of visited values

        for (let k = 0; k < 4; k++) {
            let row = i + dx[k];
            let col = j + dy[k];

            if (isValid(row, col) && board[row][col] === "O") {
                board[row][col] = "X";
                recur(row, col)
            }
        }
    }
    // edges -> i = 0, 
    // for (let i = 0; i < m; i++) {
    //     for (let j = 0; j < n; j++) {
    //         if (i === 0 || j === 0 || i === m - 1 || j === n - 1) {
    //             if (board[i][j] === "O") {
    //                 recur(i, j)
    //             }
    //         }
    //     }
    // }

    // 1st row
    for (j = 0; j < n; j++) {
        if (board[0][j] === "O") {
            recur(0, j)
        }
    }

    // last row
    for (j = 0; j < n; j++) {
        if (board[m - 1][j] === "O") {
            recur(m - 1, j)
        }
    }

    // 1st column
    for (i = 0; i < m; i++) {
        if (board[i][0] === "O") {
            recur(i, 0)
        }
    }

    // last column
    for (i = 0; i < m; i++) {
        if (board[i][n - 1] === "O") {
            recur(i, n - 1)
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "#") {
                board[i][j] = "O"
            } else {
                board[i][j] = "X"
            }

        }
    }

};
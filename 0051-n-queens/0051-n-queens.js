/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let result = [];
    let board = [];
    let colSet = new Set();
    let diagSet = new Set();
    let antiDiagSet = new Set();

    // create a board of size nxn
    for (let i = 0; i < n; i++) {
        board[i] = [];
        for (let j = 0; j < n; j++) {
            board[i][j] = '.';
        }
    }

    function transform(matrix) {
        let newBoard = [];
        for (let i = 0; i < matrix.length; i++) {
            newBoard.push(matrix[i].join(""))
        }
        return newBoard;
    }


    function recur(r) {
        // base case
        if (r === n) {
            result.push(transform(board))
        }

        // recursive and process
        for (let c = 0; c < n; c++) {
            if (colSet.has(c) || diagSet.has(r + c) || antiDiagSet.has(r - c)) {
                continue;
            }
            board[r][c] = "Q";
            colSet.add(c);
            diagSet.add(r + c);
            antiDiagSet.add(r - c);
            recur(r + 1);
            // backtracking
            board[r][c] = ".";
            colSet.delete(c);
            diagSet.delete(r + c);
            antiDiagSet.delete(r - c);
        }


    }

    recur(0);
    return result
};
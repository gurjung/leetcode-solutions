/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {

    // 0 - 8
    // or 1 - 9
    function isSafe(board, r, c, digit) {
        // horizontal
        for (let i = 0; i < 9; i++) {
            if (board[r][i] === digit) {
                return false
            }
        }

        // vertical

        for (let i = 0; i < 9; i++) {
            if (board[i][c] === digit) {
                return false
            }
        }

        // grid
        let sr = Math.floor(r / 3) * 3;
        let sc = Math.floor(c / 3) * 3;

        for (let i = sr; i < sr + 3; i++) {
            for (let j = sc; j < sc + 3; j++) {
                if (board[i][j] === digit) {
                    return false;
                }
            }
        }

        return true;

    }
    function recur(r, c) {
        // base case
        if (r === 9) {
            return true;
        }

        // recursive step and process

        let nextRow = r;
        let nextCol = c + 1;

        if (nextCol === 9) {
            nextRow = r + 1;
            nextCol = 0;
        }

        // if not empty
        if (board[r][c] !== ".") {
            // call recur again with col + 1
            return recur(nextRow, nextCol)
        }

        for (let digit = 1; digit <= 9; digit++) {
            let value = digit.toString()
            if (isSafe(board, r, c, value)) {
                board[r][c] = value;
                if (recur(nextRow, nextCol)) {
                    return true;
                }
                // backtracking
                board[r][c] = "."
            }
        }
        return false;

    }

    recur(0, 0)
};
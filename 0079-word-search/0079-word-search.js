/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let m = board.length;
    let n = board[0].length;
    let ans = false;

    function isValid(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return false;
        }
        return true;
    }

    function recur(i, j, idx) {
        // base case 
        if (word.length === idx) {
            ans = true;
            return;
        }

        let original = board[i][j];
        board[i][j] = "#";
        // process and recursive step
        // move in 4 directions

        //top
        if (isValid(i - 1, j) && board[i - 1][j] === word[idx]) {
            recur(i - 1, j, idx + 1)
        }
        //bottom
        if (isValid(i + 1, j) && board[i + 1][j] === word[idx]) {
            recur(i + 1, j, idx + 1)
        }
        //left
        if (isValid(i, j - 1) && board[i][j - 1] === word[idx]) {
            recur(i, j - 1, idx + 1)
        }
        //right
        if (isValid(i, j + 1) && board[i][j + 1] === word[idx]) {
            recur(i, j + 1, idx + 1)
        }

        board[i][j] = original
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                recur(i, j, 1)
            }
        }
    }

    return ans
};
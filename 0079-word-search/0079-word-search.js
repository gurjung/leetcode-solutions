/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let m = board.length;
    let n = board[0].length;

    let ans = false;

    function recur(x, y, count) {
        // base case
        if (word.length === count) {
            ans = true;
            return;
        }

        //recursive step and process
        let original = board[x][y];
        board[x][y] = '#'; // because i already seen it

        // check all directions now
        // top
        if (y > 0 && board[x][y - 1] === word[count]) {
            recur(x, y - 1, count + 1)
        }
        //left
        if (x > 0 && board[x - 1][y] === word[count]) {
            recur(x - 1, y, count + 1)
        }
        //right
        if (x < m - 1 && board[x + 1][y] === word[count]) {
            recur(x + 1, y, count + 1)
        }
        // bottom
        if (y < n - 1 && board[x][y + 1] === word[count]) {
            recur(x, y + 1, count + 1)
        }

        board[x][y] = original;
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
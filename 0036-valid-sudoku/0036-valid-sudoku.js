/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    // rows, cols, grid box (r/3) (c/3)
    let m = board.length;
    let n = board[0].length;


    let set = new Set();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === ".") continue;
            let row = board[i][j] + "row" + i;
            let col = board[i][j] + "col" + j;
            let box = board[i][j] + 'box' + Math.floor(i / 3) + "_" + Math.floor(j / 3);

            if (set.has(row) || set.has(col) || set.has(box)) {
                return false
            } else {
                set.add(row);
                set.add(col);
                set.add(box);
            }
        }
    }
    return true;
};
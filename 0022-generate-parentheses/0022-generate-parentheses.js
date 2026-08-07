/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    // recursion + backtracking
    let open = 0;
    let close = 0;
    let temp = [];
    let result = [];
    function recur(temp, open, close) {
        // base condition
        if (open === n && close === n) {
            let str = temp.join("");
            result.push(str);
            return;
        }

        // recurive step and process
        if (open < n) {
            temp.push("(")
            recur(temp, open + 1, close);
            temp.pop();
        }
        if (close < open) {
            temp.push(")");
            recur(temp, open, close + 1)
            temp.pop();
        }
    }

    recur(temp, open, close);
    return result
};
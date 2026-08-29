/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = [];
    let temp = [];
    // no open means no close
    function recur(temp, open, close) {
        // base case
        if (open === n && close === n) {
            let str = temp.join("");
            result.push(str);
            return;
        }

        // recursive step and process
        if (open < n) {
            temp.push("(");
            recur(temp, open + 1, close);
            temp.pop();
        }
        if (open > close) {
            temp.push(")");
            recur(temp, open, close + 1);
            temp.pop();
        }
    }

    recur(temp, 0, 0);
    return result;
};
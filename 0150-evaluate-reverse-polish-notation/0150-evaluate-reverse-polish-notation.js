/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    // [2, 1]
    function isOperator(x) {
        let validOp = ["+", "-", "*", "/"];
        return validOp.includes(x)
    }

    for (let i = 0; i < tokens.length; i++) {
        if (isOperator(tokens[i])) {
            let s = stack.pop();
            let f = stack.pop();
            let op = tokens[i];
            let res;
            if (op === "+") {
                res = f + s
            } else if (op === "-") {
                res = f - s
            } else if (op === "*") {
                res = f * s;
            } else {
                res = Math.trunc(f / s)
            }
            stack.push(res);
        } else {
            stack.push(Number(tokens[i]))
        }
    }
    
    return stack[stack.length - 1]
};
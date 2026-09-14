/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    // stack
    let stack = [];
    // [2, 1, ]
    // let operatorsMap = {
    //     "*": *,
    //     "+": +,
    //     "-": -,
    //     "/": /
    // };

    for (let i = 0; i < tokens.length; i++) {
        // if it is operator -> 
        if (tokens[i] === "*" || tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "/") {
            let op = tokens[i];
            secondOp = stack.pop();
            firstOp = stack.pop();
            let val;
            if (op === "+") {
                val = firstOp + secondOp
            } else if (op === "-") {
                val = firstOp - secondOp;
            } else if (op === "*") {
                val = firstOp * secondOp;
            } else {
                val = Math.trunc(firstOp / secondOp)
            }
            stack.push(val)
        } else {
            stack.push(Number(tokens[i]))
        }

    }

    return stack[stack.length - 1]
};
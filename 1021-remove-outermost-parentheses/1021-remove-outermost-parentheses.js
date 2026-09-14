/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    // s = ""
    // open = "(" -> stack push
    // close = ")" -> stack pop 
    // stack = []
    // ans = "()()()"
    let stack = [];
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        let val = s[i];

        if (val === "(") {
            stack.push(val);
            if (stack.length > 1) {
                ans = ans + val
            }
        } else {
            if (stack.length > 1) {
                ans = ans + val
            }
            stack.pop()
        }
    }
    return ans
};
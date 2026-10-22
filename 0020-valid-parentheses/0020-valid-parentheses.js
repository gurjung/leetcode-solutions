/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    // s = "([])"
    // stack = [(, [, ]
    let lookup = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            // opening brackets case
            stack.push(s[i])
        } else {
            let val = stack.pop();
            if (s[i] !== lookup[val]) {
                return false;
            }
        }
    }
    if (!stack.length) return true;
    return false;
};
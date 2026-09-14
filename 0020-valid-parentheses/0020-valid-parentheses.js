/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    //  s = "([)]" => 
    // stack = [([]
    // s = "()[]{}" => 
    // stack = []

    let stack = [];

    let map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    for (let i = 0; i < s.length; i++) {
        let val = s[i];

        if (val === "(" || val === "[" || val === "{") {
            stack.push(val);
        } else {
            if (stack.length) {
                let curr = stack.pop();
                if (map[curr] !== val) {
                    return false
                }
            } else {
                return false;
            }
        }
    }

    if (stack.length === 0) return true;

    return false;

};
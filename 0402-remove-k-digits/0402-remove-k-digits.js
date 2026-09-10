/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    // stack = [1,2,1,9], k = 0
    // num = "1432219", k = 3
    // num = "10200", k = 1
    // stack = [0,2,0,0]
    if (num.length === 1) return "0"

    let stack = [];
    let remaining = k;

    for (let i = 0; i < num.length; i++) {

        let current = num[i]
        while (stack.length && remaining > 0) {
            let stackTop = stack[stack.length - 1]
            if (stackTop > current) {
                stack.pop();
                remaining--;
            } else {
                break;
            }
        }
        // stack empty
        stack.push(current);

    }
    while (remaining > 0) {
        stack.pop();
        remaining--;
    }


    while (stack.length && stack[0] === '0') {
        stack.shift()
    }

    return stack.length ? stack.join("") : "0"

};
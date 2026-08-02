/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    // approach -> using stack
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if(!stack.length) {
            stack.push(char);
            continue;
        }

        if(stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    let ans = [];
    while(stack.length) {
        let val = stack.pop();
        ans.push(val)
    }

    return ans.reverse().join("")
};
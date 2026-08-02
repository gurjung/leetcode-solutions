/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    // using stack

    let stack = [];
    // [{d: 1}, {e:1}]
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!stack.length) {
            stack.push({ char, count: 1 });
            continue;
        }
        if (stack[stack.length - 1].char !== char) {
            stack.push({ char, count: 1 })
            continue;
        } else {
            if (stack[stack.length - 1].count < k - 1) {
                let curr = stack.pop();
                // increase the count from prev value for same char
                stack.push({ char, count: curr.count + 1 })
            } else {
                stack.pop();
            }
        }

    }
    let res = []
    while(stack.length) {
        let curr = stack.pop();

        for(let i = 0; i < curr.count; i++) {
            res.push(curr.char)
        }
    }

    return res.reverse().join("")
};
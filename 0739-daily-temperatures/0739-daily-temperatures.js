/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    // temperatures = [73,74,75,71,69,72,76,73]
    // answer = [1,1,4,2,1,1,0,0]
    // nge = [1,2,6,5,5,6,-1,-1]
    // find nge
    let nge = [];
    let n = temperatures.length;
    let stack = [];
    // [73]
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
            stack.pop();
        }
        if (stack.length) {
            nge[i] = stack[stack.length - 1]
        } else {
            nge[i] = -1;
        }

        stack.push(i);
    }

    let answer = new Array(n);

    for (let i = n - 1; i >= 0; i--) {
        if (nge[i] === -1) {
            answer[i] = 0;
        } else {
            answer[i] = nge[i] - i
        }

    }

    return answer
};
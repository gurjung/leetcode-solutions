/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    //[2,1,5,6,2,3]
    //nsl = [-1,-1,1,5,1,2]
    //nsr = [1,-1,2,2,-1,-1]

    // find nsl

    let nsl = [];
    let stack = [];
    let n = heights.length;
    // stack = [1]
    for (let i = 0; i < n; i++) {
        while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length) {
            nsl[i] = stack[stack.length - 1];
        } else {
            nsl[i] = -1;
        }
        stack.push(i)
    }

    stack = [];
    let nsr = [];
    // stack = [2]
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length) {
            nsr[i] = stack[stack.length - 1];
        } else {
            nsr[i] = n;
        }
        stack.push(i)
    }

    let result = 0;

    for (let i = 0; i < n; i++) {
        let width = nsr[i] - nsl[i] - 1;
        let area = heights[i] * width;
        result = Math.max(area, result)
    }

    return result

};
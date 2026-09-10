/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    // find nsl
    // heights = [2,1,5,6,2,3]
    // nsl = [-1, -1, 1, 2, 1, 4]
    let stack = [];
    let result = 0;
    let n = heights.length;

    let nsl = [];


    for (let i = 0; i < n; i++) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        if (stack.length) {
            nsl.push(stack[stack.length - 1])
        } else {
            nsl[i] = -1;
        }

        stack.push(i)
    }
    console.log(nsl, "NSL")
    let nsr = [];
    stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        if (stack.length) {
            nsr[i] = stack[stack.length - 1]
        } else {
            nsr[i] = n;
        }

        stack.push(i)
    }

    console.log(nsr, "NSR")

    for (let i = 0; i < n; i++) {
        let width = nsr[i] - nsl[i] - 1;
        let area = heights[i] * width;
        result = Math.max(area, result)
    }

    return result
};
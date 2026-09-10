/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    // appraoch -> for every row make it similar to Largest Rectangle in Histogram problem
    let r = matrix.length;
    let c = matrix[0].length;

    let heights = new Array(c).fill(0);
    // [0, 0, 0, 0, 0]
    let result = 0;

    function findLargestRectangle(arr) {
        let stack = [];
        let ans = 0;
        let n = arr.length;

        let nsl = [];


        for (let i = 0; i < n; i++) {
            while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
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
            while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
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
            let area = arr[i] * width;
            ans = Math.max(area, ans)
        }

        return ans;
    }

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (matrix[i][j] === "1") {
                heights[j] = heights[j] + 1;
            } else {
                heights[j] = 0
            }
        }

        // for every heights corresponding to one value of i we need to calculate result similar to histogram problem and then return max of all results as an final answer
        let rectangle = findLargestRectangle(heights);
        result = Math.max(rectangle, result)
    }

    return result
};
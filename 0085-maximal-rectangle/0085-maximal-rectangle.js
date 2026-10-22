/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    let r = matrix.length;
    let c = matrix[0].length;

    let nums = new Array(c).fill(0);
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

        for (let i = 0; i < n; i++) {
            let width = nsr[i] - nsl[i] - 1;
            let area = arr[i] * width;
            ans = Math.max(area, ans)
        }

        return ans;
    }

    // iterate through matrix and fill nums array for each row and check largest area in each row
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (matrix[i][j] === "1") {
                nums[j] = nums[j] + 1
            } else {
                nums[j] = 0;
            }
        }

        // for row 1 => nums = [1, 0, 1, 0, 0];
        // for row 2 => nums = [2, 0, 2, 1, 1];
        // for row 3 => nums = [3, 1, 3, 2, 2];
        let rectangle = findLargestRectangle(nums);
        console.log(nums, rectangle, i, "DEBUG")
        result = Math.max(rectangle, result)
    }

    return result
};
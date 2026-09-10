/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
    // brute force -> TLE
    // let sum = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j <= nums.length; j++) {
    //         let subArray = nums.slice(i, j);
    //         let largest = Math.max(...subArray);
    //         let smallest = Math.min(...subArray);
    //         let range = largest - smallest;
    //         sum = sum + range;
    //     }
    // }

    // return sum

    // analyze
    // nums = [1,2,3]
    // sum of subarray max - sum of subarray min
    // [1], range = largest - smallest = 1 - 1 = 0
    // [2], range = 2 - 2 = 0
    // [3], range = 3 - 3 = 0
    // [1, 2], range = 2 - 1 = 1
    // [2, 3], range = 3 - 2 = 1
    // [1, 2, 3], range = 3 - 1 = 2
    // (1-1) + (2 - 2) + (3 - 3) + (2 - 1) + (3 - 2) + (3 - 1) = final answer
    // separate sum of largest and sum of smallest and subtract them


    // find nsl and nsr for sum of subarray min
    let nsl = [];
    let nsr = [];
    let n = nums.length;

    let stack = [];
    // NSL
    for (let i = 0; i < n; i++) {
        while (stack.length && nums[stack[stack.length - 1]] >= nums[i]) {
            stack.pop()
        }
        if (stack.length) {
            nsl.push(stack[stack.length - 1])
        } else {
            nsl[i] = -1;
        }

        stack.push(i)
    }

    stack = [];
    // NSR
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
            stack.pop()
        }
        if (stack.length) {
            nsr[i] = (stack[stack.length - 1])
        } else {
            nsr[i] = n;
        }

        stack.push(i)
    }

    let minSum = 0;
    for (let i = 0; i < n; i++) {
        let left = i - nsl[i]
        let right = nsr[i] - i
        minSum = (minSum + nums[i] * left * right)
    }
    console.log(minSum, "DEBUG")

    // find ngl and ngr for sum of subarray max
    let ngl = [];
    let ngr = [];

    stack = [];
    // NGL
    for (let i = 0; i < n; i++) {
        while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) {
            stack.pop()
        }
        if (stack.length) {
            ngl.push(stack[stack.length - 1])
        } else {
            ngl[i] = -1;
        }

        stack.push(i)
    }

    stack = [];
    // NGR
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
            stack.pop()
        }
        if (stack.length) {
            ngr[i] = (stack[stack.length - 1])
        } else {
            ngr[i] = n;
        }

        stack.push(i)
    }

    let maxSum = 0;
    for (let i = 0; i < n; i++) {
        let left = i - ngl[i]
        let right = ngr[i] - i
        maxSum = (maxSum + nums[i] * left * right)
    }

    return maxSum - minSum;
};
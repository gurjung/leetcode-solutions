/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let nge = [];
    let n = nums.length;
    let stack = [];
    // [1,2,1,1,2,1]
    // nge = [2,-1,2,2,-1,-1]

    for (let i = 2 * n - 1; i >= 0; i--) {
        let idx = i % n;
        while (stack.length && stack[stack.length - 1] <= nums[idx]) {
            stack.pop();
        }
        if (stack.length) {
            nge[i] = stack[stack.length - 1]
        } else {
            nge[i] = -1;
        }

        stack.push(nums[idx])
    }

    let ans = [];
    for (let i = 0; i < n; i++) {
        ans.push(nge[i])
    }

    return ans;
};
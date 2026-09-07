/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    // nums = [1,2,3,4,3,1,2,3,4,3]
    // nge =  [2,3,4,-1,4,3,4,-1,-1]
    // approach 1 -> double the array
    let clone = [...nums, ...nums];
    let nge = [];
    let stack = [];
    let n = clone.length;
    // [3] 
    for (let i = n - 1; i >= 0; i--) {

        while (stack.length && stack[stack.length - 1] <= clone[i]) {
            stack.pop();
        }
        if (stack.length) {
            nge[i] = stack[stack.length - 1];
        } else {
            nge[i] = -1;
        }
        stack.push(clone[i]);

    }

    console.log(nge, "NGE")
    let result = []
    for (let i = 0; i < nums.length; i++) {
        result[i] = nge[i]
    }

    return result
};
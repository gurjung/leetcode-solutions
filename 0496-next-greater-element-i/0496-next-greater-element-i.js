/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    // nums1 = [4,1,2], nums2 = [1,3,4,2]
    // nge = [3,4,-1,-1]
    // nums1nge = [-1,3,-1]

    let nge = [];
    let n = nums2.length;
    let stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] < nums2[i]) {
            stack.pop();
        }
        if (stack.length) {
            nge[i] = stack[stack.length - 1]
        } else {
            nge[i] = -1;
        }

        stack.push(nums2[i])
    }
    let ans = [];
    for (let i = 0; i < nums1.length; i++) {
        // find index from nums2
        let idx = nums2.indexOf(nums1[i]);
        ans.push(nge[idx])
    }

    return ans
};
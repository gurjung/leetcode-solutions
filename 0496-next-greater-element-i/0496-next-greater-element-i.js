/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    // nums1 = [4,1,2], nums2 = [1,3,4,2]
    // nge = [3,4,-1,-1]
    let n = nums2.length;

    let nge = [];
    let stack = [];
    // stack = [4, 3]
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] < nums2[i]) {
            stack.pop()
        }
        if (stack.length) {
            nge[i] = stack[stack.length - 1]
        } else {
            nge[i] = -1
        }

        stack.push(nums2[i]);
    }

    let result = new Array(nums1.length);
    for (let i = 0; i < nums1.length; i++) {
        let val = nums1[i];
        let idx = nums2.indexOf(val);
        result[i] = nge[idx]
    
    }

    return result
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    // find nge of nums2
    let nge = [];
    let stack = []; // [4] 
    let n = nums2.length;
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] < nums2[i]) {
            stack.pop()
        }
        if (stack.length) {
            nge[i] = stack[stack.length - 1]
        } else {
            nge[i] = -1
        }

        stack.push(nums2[i])
    }

    let ans = new Array(nums1.length);
    
    for(let i = 0; i < nums1.length;i++) {
        let idx = nums2.indexOf(nums1[i]);
        ans[i] = nge[idx]
    }
    return ans
};
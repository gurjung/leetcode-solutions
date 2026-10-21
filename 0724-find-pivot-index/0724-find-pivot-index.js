/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    // nums = [1,7,3,6,5,6]
    // prefix sum = [1,8,11,17,22,28]
    // suffix sum = [28,27,20,17,11,6]

    let n = nums.length;
    let prefixArr = new Array(n).fill(0);
    let suffixArr = new Array(n).fill(0);
    prefixArr[0] = nums[0];
    suffixArr[n - 1] = nums[n - 1];

    for (let i = 1; i < n; i++) {
        // prefix sum
        prefixArr[i] = nums[i] + prefixArr[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        suffixArr[i] = nums[i] + suffixArr[i + 1];
    }

    for (let k = 0; k < n; k++) {
        if (prefixArr[k] === suffixArr[k]) {
            return k
        }
    }

    return -1;
};
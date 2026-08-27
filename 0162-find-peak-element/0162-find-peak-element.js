/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    // approach 1 -> linear search
    let n = nums.length;

    if (n < 2) {
        return 0;
    }

    // Check first element
    if (nums[0] > nums[1]) {
        return 0;
    }

    for (let i = 1; i < n - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i
        }
    }

    return n - 1;
};
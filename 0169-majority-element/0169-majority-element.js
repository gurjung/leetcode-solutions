/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // nums = [2,2,1,1,1,2,2]

    // Approach 1 -> use sorting and return middle element

    nums.sort((a, b) => a - b);

    return nums[Math.floor(nums.length / 2)]
};
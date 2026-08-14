/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // nums = [2,2,1,1,1,2,2]

    // Approach 1 -> use sorting and return middle element

    // nums.sort((a, b) => a - b);

    // return nums[Math.floor(nums.length / 2)]

    // Approach 2 -> Moore's Voting Algorithm

    let count = 0;
    let candidate = null;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }

        if (candidate !== nums[i]) {
            count--;
        }

        if (candidate === nums[i]) {
            count++;
        }
    }

    return candidate;

};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    // Track how farthest we can go from current position
    let farthest = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > farthest) return false;
        farthest = Math.max(farthest, i + nums[i]);
    }
    return true;
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let farthest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > farthest) return false;
        let temp = nums[i] + i;
        farthest = Math.max(farthest, temp)
    }
    return true
};
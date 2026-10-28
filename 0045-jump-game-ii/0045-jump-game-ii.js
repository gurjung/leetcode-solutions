/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let farthest = 0;
    let jumps = 0;
    let currEnd = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        // if (i > farthest) return false;
        let temp = nums[i] + i;
        farthest = Math.max(farthest, temp)
        if (i === currEnd) {
            jumps++;
            currEnd = farthest;
        }
    }
    return jumps
};
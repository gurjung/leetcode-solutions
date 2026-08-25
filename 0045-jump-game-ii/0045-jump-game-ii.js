/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    // approach 2 -> 
    let farthest = 0;
    let jumps = 0;
    let n = nums.length;
    let currEnd = 0;

    for (let i = 0; i < n - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i === currEnd) {
            jumps++;
            currEnd = farthest;
        }
    }

    return jumps;
};
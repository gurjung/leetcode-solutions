/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    // Track how farthest we can go from current position
    let farthest = 0;
    let jumps = 0;
    let n = nums.length;
    let currEnd = 0;

    if (n === 1) {
        return 0;
    }

    for (let i = 0; i < n - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i === currEnd) {
            jumps++;
            currEnd = farthest;

            if (currEnd >= n - 1) {
                return jumps
            }
        }
    }
};
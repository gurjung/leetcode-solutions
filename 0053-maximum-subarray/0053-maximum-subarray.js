/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // kadane's pattern
    let bestEnding = nums[0];
    let ans = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let path1 = bestEnding + nums[i];
        let path2 = nums[i];
        bestEnding = Math.max(path1, path2);
        ans = Math.max(ans, bestEnding);
    }

    return ans;
};
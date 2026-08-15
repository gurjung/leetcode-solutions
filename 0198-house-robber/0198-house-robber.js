/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length;

    let dp = new Array(n + 1).fill(0);

    dp[0] = nums[0];

    dp[1] = Math.max(nums[0], nums[1]);

    if (n === 1) return dp[0];
    if (n === 2) return dp[1];

    for (let i = 2; i < nums.length; i++) {
        let rob = nums[i] + dp[i - 2];
        let skip = dp[i - 1];

        dp[i] = Math.max(rob, skip);
    }

    return dp[n - 1]
};
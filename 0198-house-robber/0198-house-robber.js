/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // approach -> DP with array
    // nums = [2,7,9,3,1]

    // base case 
    // 1 home -> nums[0]
    // 2 home -> Math.max(nums[0], nums[1])
    let dp = [nums[0], Math.max(nums[0], nums[1])]
    let n = nums.length;
    for (let i = 2; i < n; i++) {
        // two choices we have
        // take it (considering current home)
        let take = nums[i] + dp[i - 2]
        // skip
        let skip = dp[i - 1];

        dp[i] = Math.max(take, skip)
    }

    return dp[n - 1]

};
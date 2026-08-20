/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // //  approach 1 -> recursion

    // let prev = null;

    // function recur(prev, p) {
    //     // base condition
    //     if (p === nums.length) {
    //         return 0;
    //     }

    //     // two choices
    //     let takeIt = 0;

    //     if (prev === null || prev < nums[p]) {
    //         takeIt = 1 + recur(nums[p], p + 1);
    //     }

    //     let skip = recur(prev, p + 1)

    //     return Math.max(takeIt, skip)
    // }

    // return recur(prev, 0)

    //  approach 2 -> recursion + memo

    let prev = -1;
    let n = nums.length;

    let dp = [];

    for (let i = 0; i <= n; i++) {
        dp[i] = []
        for (let j = 0; j < n; j++) {
            dp[i][j] = -1;
        }
    }

    // we are taking prevIndex in dp state not actual value

    function recur(prevIndex, p) {
        // base condition
        if (p === n) {
            return 0;
        }

        if (dp[prevIndex + 1][p] !== -1) {
            return dp[prevIndex + 1][p]
        }

        // two choices
        let takeIt = 0;

        if (prevIndex === -1 || nums[prevIndex] < nums[p]) {
            takeIt = 1 + recur(p, p + 1);
        }

        let skip = recur(prevIndex, p + 1)

        dp[prevIndex + 1][p] = Math.max(takeIt, skip);
        return dp[prevIndex + 1][p]
    }

    return recur(prev, 0)
};
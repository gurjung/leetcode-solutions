/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // approach 2 -> recursion + memo
    let n = coins.length;

    let dp = [];

    for (let i = 0; i < amount + 1; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            if (i === 0) {
                // base case
                dp[0][j] = 0
            }
            dp[i][j] = -1
        }
    }

    function recur(target, p) {
        // base case 
        if (target === 0) return 0;

        if (target < 0 || p >= n) return Infinity;

        if (dp[target][p] !== -1) {
            return dp[target][p]
        }

        // process and recursive step

        let take = 1 + recur(target - coins[p], p);
        let skip = recur(target, p + 1)
        dp[target][p] = Math.min(take, skip)
        return dp[target][p]

    }

    let ans = recur(amount, 0);
    return ans === Infinity ? -1 : ans;
};
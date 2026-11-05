/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let n = coins.length;
    let dp = [];

    for (let i = 0; i < n; i++) {
        dp[i] = [];
        for (let j = 0; j <= amount; j++) {
            dp[i][j] = -1;
        }
    }

    function recur(p, target) {
        // base case
        if (target === 0) {
            return 0;
        }

        if (p >= n || target < 0) {
            return Infinity;
        }

        if (dp[p][target] !== -1) {
            return dp[p][target]
        }

        // process and recursive step
        let takeIt = 1 + recur(p, target - coins[p]);
        let skip = recur(p + 1, target);
        dp[p][target] = Math.min(takeIt, skip)
        return dp[p][target]

    }

    let res = recur(0, amount);
    return res === Infinity ? -1 : res
};
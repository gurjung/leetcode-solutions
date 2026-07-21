/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // // recursion

    // let n = coins.length;

    // function recur(target, p) {
    //     // base case
    //     if (target === 0) return 0;

    //     if (target < 0 || p >= n) {
    //         return Infinity;
    //     }
    //     // two choices 
    //     let take = 1 + recur(target - coins[p], p);
    //     let skip = recur(target, p + 1);
    //     return Math.min(take, skip)

    // }

    // let ans = recur(amount, 0);
    // return ans === Infinity ? -1 : ans

    // recursion + memo

    // let n = coins.length;

    // let dp = [];

    // for (let i = 0; i <= amount; i++) {
    //     dp[i] = [];
    //     for (let j = 0; j <= n; j++) {
    //         dp[i][j] = -1;
    //     }
    // }


    // function recur(target, p) {
    //     // base case
    //     if (target === 0) return 0;

    //     if (target < 0 || p >= n) {
    //         return Infinity;
    //     }

    //     if (dp[target][p] !== -1) {
    //         return dp[target][p]
    //     }
    //     // two choices 
    //     let take = 1 + recur(target - coins[p], p);
    //     let skip = recur(target, p + 1);
    //     dp[target][p] = Math.min(take, skip)
    //     return dp[target][p]

    // }

    // let ans = recur(amount, 0);
    // return ans === Infinity ? -1 : ans

    // tabulation
    let n = coins.length;

    let dp = new Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coin])
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};
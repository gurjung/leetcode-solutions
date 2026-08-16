/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // // Approach 1 -> recursion
    // let n = coins.length;

    // function recur(remSum, p) {
    //     if (remSum === 0) {
    //         return 0;
    //     }

    //     if (remSum < 0 || p >= n) {
    //         return Infinity;
    //     }

    //     // two choices
    //     let take = 1 + recur(remSum - coins[p], p)
    //     let skip = recur(remSum, p + 1);

    //     return Math.min(take, skip)
    // }

    // let ans = recur(amount, 0);
    // return ans === Infinity ? -1 : ans


    // // Approach 2 -> recursion + memo

    // let n = coins.length;

    // let dp = []

    // for (let i = 0; i < amount + 1; i++) {
    //     dp[i] = [];
    //     for (let j = 0; j < coins.length; j++) {
    //         dp[i][j] = -1;
    //     }
    // }
    // for(let j = 0; j < coins.length; j++) {
    //     dp[0][j] = 0;
    // }


    // function recur(remSum, p) {
    //     if (remSum === 0) {
    //         return 0;
    //     }

    //     if (remSum < 0 || p >= n) {
    //         return Infinity;
    //     }

    //     if (dp[remSum][p] !== -1) {
    //         return dp[remSum][p]
    //     }

    //     // two choices
    //     let take = 1 + recur(remSum - coins[p], p)
    //     let skip = recur(remSum, p + 1);

    //     dp[remSum][p] = Math.min(take, skip);
    //     return dp[remSum][p]
    // }

    // let ans = recur(amount, 0);
    // return ans === Infinity ? -1 : ans

    // Approach 3 -> tabulation

    let dp = new Array(amount + 1).fill(Infinity);

    // base case
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
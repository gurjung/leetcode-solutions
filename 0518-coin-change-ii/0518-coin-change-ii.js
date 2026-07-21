/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    // recursion
    // let n = coins.length

    // function recur(target, p) {
    //     // base case
    //     if (target === 0) return 1;

    //     if (target < 0) return 0;

    //     if (p === n) return 0;

    //     // two choices
    //     let take = recur(target - coins[p], p);
    //     let skip = recur(target, p + 1);
    //     return take + skip

    // }

    // return recur(amount, 0)


    // recursion + memo
    let n = coins.length;

    let dp = [];

    for (let i = 0; i <= amount; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            dp[i][j] = -1;
        }
    }

    function recur(target, p) {
        // base case
        if (target === 0) return 1;

        if (target < 0) return 0;

        if (p === n) return 0;

        if (dp[target][p] !== -1) {
            return dp[target][p]
        }

        // two choices
        let take = recur(target - coins[p], p);
        let skip = recur(target, p + 1);
        dp[target][p] = take + skip
        return dp[target][p]

    }

    return recur(amount, 0)
};
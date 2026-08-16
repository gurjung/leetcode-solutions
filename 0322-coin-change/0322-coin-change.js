/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // Approach 1 -> recursion

    // coins = [1,2,5], amount = 11

    // function recur(remSum, p) {
    //     // base case
    //     if (remSum === 0) {
    //         return 0;
    //     }

    //     if (remSum < 0) {
    //         return Infinity;
    //     }

    //     let minCoins = Infinity;

    //     for (let i = 0; i < coins.length; i++) {
    //         minCoins = Math.min(minCoins, 1 + recur(remSum - coins[i]));
    //     }

    //     return minCoins;

    // }

    // let res = recur(amount, 0);

    // return res === Infinity ? -1 : res;


    // Approach 2 -> recursion + memo

    let dp = new Array(amount + 1).fill(-1);

    function recur(remSum, p) {
        // base case
        if (remSum === 0) {
            return 0;
        }

        if (remSum < 0) {
            return Infinity;
        }

        if (dp[remSum] !== -1) {
            return dp[remSum];
        }

        let minCoins = Infinity;

        for (let i = 0; i < coins.length; i++) {
            minCoins = Math.min(minCoins, 1 + recur(remSum - coins[i]));
        }

        dp[remSum] = minCoins;

        return dp[remSum];

    }

    let res = recur(amount, 0);

    return res === Infinity ? -1 : res;

};
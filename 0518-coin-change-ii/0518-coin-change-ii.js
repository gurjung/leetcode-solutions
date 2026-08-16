/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    // amount = 5, coins = [1,2,5]

    // // Approach -> recursion
    // let n = coins.length;

    // function recur(remSum, p) {
    //     // base case
    //     if(remSum === 0) {
    //         return 1;
    //     }

    //     if(remSum < 0 || p >= n) {
    //         return 0;
    //     }

    //     let takeIt = recur(remSum - coins[p], p);
    //     let skip = recur(remSum, p + 1);

    //     return takeIt + skip;
    // }

    // return recur(amount, 0)


    // Approach -> recursion + memo
    let n = coins.length;

    let dp = [];

    for (let i = 0; i < amount + 1; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            dp[i][j] = -1;
        }
    }

    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }

    function recur(remSum, p) {
        // base case
        if (remSum === 0) {
            return 1;
        }

        if (remSum < 0 || p >= n) {
            return 0;
        }

        if (dp[remSum][p] !== -1) {
            return dp[remSum][p];
        }

        let takeIt = recur(remSum - coins[p], p);
        let skip = recur(remSum, p + 1);

        dp[remSum][p] = takeIt + skip;
        return dp[remSum][p];
    }

    return recur(amount, 0)
};
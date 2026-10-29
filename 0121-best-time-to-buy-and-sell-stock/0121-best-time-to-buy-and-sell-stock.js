/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // approach 1 -> recursion

    // buy -> 1 transaction -> reduce money -> k = 2
    // sell -> 1 transaction -> increase money -> k = 1
    // before buying you cannot sell

    // let transaction = 2;
    // let n = prices.length;

    // function recur(k, p) {
    //     if (p >= n || k === 0) {
    //         return 0;
    //     }

    //     if (k === 2) {

    //         // buy or do nothing (two choices)
    //         let buy = recur(k - 1, p + 1) - prices[p]
    //         let skip = recur(k, p + 1)
    //         return Math.max(buy, skip)
    //     } else {
    //         let sell = recur(k - 1, p + 1) + prices[p]
    //         let skip = recur(k, p + 1)
    //         return Math.max(sell, skip)
    //     }

    // }

    // return recur(transaction, 0)

    // recursion + memo

    let transactions = 2;
    let n = prices.length;

    let dp = []

    for (let i = 0; i <= transactions; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            dp[i][j] = -1;
            if (i === 0 || j === n) {
                dp[i][j] = 0
            }
        }
    }

    function recur(k, p) {
        if (p >= n || k === 0) {
            return 0;
        }

        if (dp[k][p] !== -1) {
            return dp[k][p];
        }

        if (k === 2) {

            // buy or do nothing (two choices)
            let buy = recur(k - 1, p + 1) - prices[p]
            let skip = recur(k, p + 1)
            dp[k][p] = Math.max(buy, skip)
            return dp[k][p]
        } else {
            let sell = recur(k - 1, p + 1) + prices[p]
            let skip = recur(k, p + 1)
            dp[k][p] = Math.max(sell, skip)
            return dp[k][p]
        }

    }

    return recur(transactions, 0)
};
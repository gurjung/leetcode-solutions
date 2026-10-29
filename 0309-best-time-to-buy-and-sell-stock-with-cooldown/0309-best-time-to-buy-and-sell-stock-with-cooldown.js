/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // recursion + memo
    // here k, transactions cannot be 0 i.e unlimited transactions

    let transactions = 2;
    let n = prices.length;

    let dp = []

    for (let i = 0; i <= transactions; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            dp[i][j] = -1;
            if (j === n) {
                dp[i][j] = 0
            }
        }
    }

    function recur(k, p) {
        if (p >= n) {
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
        } else if (k === 1) {
            let sell = recur(transactions, p + 2) + prices[p]; // to restart cycle we pass transactions again
            let skip = recur(k, p + 1)
            dp[k][p] = Math.max(sell, skip)
            return dp[k][p]
        }

    }

    return recur(transactions, 0)
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    // // Approach 1 -> recursion
    // numsCpy = [1, ...nums, 1];
    // let n = numsCpy.length;

    // function recur(i, j) {
    //     // base case
    //     if (i > j) return 0;

    //     let ans = -Infinity; // because we want maximum

    //     for (let k = i; k <= j; k++) {
    //         let left = recur(i, k - 1);
    //         let right = recur(k + 1, j);
    //         let val = numsCpy[i - 1] * numsCpy[k] * numsCpy[j + 1];
    //         let currCoins = left + val + right;
    //         ans = Math.max(ans, currCoins);
    //     }

    //     return ans
    // }

    // return recur(1, n - 2)

    // Approach 2 -> recursion + memo

    numsCpy = [1, ...nums, 1];
    let n = numsCpy.length;

    let dp = [];

    for (let i = 0; i <= n; i++) {
        dp[i] = [];

        for (let j = 0; j <= n; j++) {
            dp[i][j] = -1
        }
    }

    function recur(i, j) {
        // base case
        if (i > j) return 0;

        if (dp[i][j] !== -1) {
            return dp[i][j]
        }

        let ans = -Infinity; // because we want maximum

        for (let k = i; k <= j; k++) {
            let left = recur(i, k - 1);
            let right = recur(k + 1, j);
            let val = numsCpy[i - 1] * numsCpy[k] * numsCpy[j + 1];
            let currCoins = left + val + right;
            ans = Math.max(ans, currCoins);
        }
        dp[i][j] = ans;

        return dp[i][j];
    }

    return recur(1, n - 2)

};
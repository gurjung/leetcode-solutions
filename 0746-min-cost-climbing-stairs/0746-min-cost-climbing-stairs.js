/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    // you can either climb one or two steps.
    // start from index 0 or index 1.
    // cost = [1,100,1,1,1,100,1,1,100,1]

    // Approach 1 -> recursion (TLE)

    // function recur(p) {
    //     // base condition
    //     if (p >= cost.length) {
    //         return 0;
    //     }

    //     return cost[p] + Math.min(recur(p + 1), recur(p + 2))
    // }

    // return Math.min(recur(0), recur(1))

    // // Approach 2 -> recursion + memo

    // let dp = new Array(cost.length + 1).fill(-1)

    // function recur(p) {
    //     // base condition
    //     if (p >= cost.length) {
    //         return 0;
    //     }

    //     if (dp[p] !== -1) {
    //         return dp[p]
    //     }

    //     dp[p] = cost[p] + Math.min(recur(p + 1), recur(p + 2))
    //     return dp[p];
    // }

    // return Math.min(recur(0), recur(1))

    // Approach 3 -> tabulation
    let n = cost.length;

    let dp = new Array(n + 1).fill(-1);

    // base case
    dp[n] = 0; // no cost on top floor;
    dp[n - 1] = cost[n - 1] + dp[n];

    for (let i = n - 2; i >= 0; i--) {
        dp[i] = cost[i] + Math.min(dp[i + 1], dp[i + 2])
    }

    return Math.min(dp[0], dp[1])

};
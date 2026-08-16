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

    // Approach 2 -> recursion + memo

    let dp = new Array(cost.length + 1).fill(-1)

    function recur(p) {
        // base condition
        if (p >= cost.length) {
            return 0;
        }

        if (dp[p] !== -1) {
            return dp[p]
        }

        dp[p] = cost[p] + Math.min(recur(p + 1), recur(p + 2))
        return dp[p];
    }

    return Math.min(recur(0), recur(1))

};
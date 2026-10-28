/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    // approach 1 -> recursion
    // either start with step 1 [index 0], or step 2 [index 1]
    // let n = cost.length;

    // function recur(p) {
    //     // two choices
    //     if (p >= n) {
    //         return 0
    //     }
    //     let path1 = cost[p] + recur(p + 1);
    //     let path2 = cost[p] + recur(p + 2);

    //     return Math.min(path1, path2)
    // }

    // return Math.min(recur(0), recur(1))

    // approach 2 -> recursion + memo
    // either start with step 1 [index 0], or step 2 [index 1]
    let n = cost.length;
    let dp = new Array(n + 1).fill(-1)
    function recur(p) {
        // two choices
        if (p >= n) {
            return 0
        }

        if (dp[p] !== -1) {
            return dp[p]
        }
        let path1 = cost[p] + recur(p + 1);
        let path2 = cost[p] + recur(p + 2);

        dp[p] = Math.min(path1, path2)
        return dp[p]
    }

    return Math.min(recur(0), recur(1))
};
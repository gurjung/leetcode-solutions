/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function (n, cuts) {
    // approach 1 -> recursion
    // add 0 in front and n at last for easy calculations

    // let cutsCpy = [0, ...cuts, n];
    // cutsCpy.sort((a, b) => a - b);

    // function recur(i, j) {
    //     // base case
    //     if (i > j) return 0;

    //     let ans = Infinity;
    //     for (let k = i; k <= j; k++) {
    //         let left = recur(i, k - 1);
    //         let right = recur(k + 1, j);
    //         let val = cutsCpy[j + 1] - cutsCpy[i - 1];
    //         let currCost = left + val + right;
    //         ans = Math.min(ans, currCost)
    //     }
    //     return ans;
    // }

    // return recur(1, cutsCpy.length - 2); // i , n-2

    // approach 2 -> recursion + memo
    // add 0 in front and n at last for easy calculations

    let cutsCpy = [0, ...cuts, n];
    cutsCpy.sort((a, b) => a - b);

    let dp = [];

    for (let i = 0; i <= cutsCpy.length; i++) {
        dp[i] = [];
        for (let j = 0; j <= cutsCpy.length; j++) {
            dp[i][j] = -1;
        }
    }

    function recur(i, j) {
        // base case
        if (i > j) return 0;

        if (dp[i][j] !== -1) {
            return dp[i][j]
        }

        let ans = Infinity;
        for (let k = i; k <= j; k++) {
            let left = recur(i, k - 1);
            let right = recur(k + 1, j);
            let val = cutsCpy[j + 1] - cutsCpy[i - 1];
            let currCost = left + val + right;
            ans = Math.min(ans, currCost);
        }
        dp[i][j] = ans;
        return dp[i][j];
    }

    return recur(1, cutsCpy.length - 2); // i , n-2

};
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    // // Approach 1 -> recursion T= O(2^n)
    // // s = "babgbag", t = "bag"
    // // start backwards
    // let n = s.length;
    // let m = t.length;

    // function recur(i, j) {
    //     // base case
    //     if (j < 0) {
    //         return 1;
    //     }
    //     if (i < 0) {
    //         return 0;
    //     }

    //     if (s[i] === t[j]) {
    //         let takeIt = recur(i - 1, j - 1);
    //         let skip = recur(i - 1, j);
    //         return takeIt + skip;
    //     } else {
    //         let skip = recur(i - 1, j)
    //         return skip;
    //     }
    // }

    // return recur(n - 1, m - 1)


    // Approach 1 -> recursion + memo T= O(nxm)
    // s = "babgbag", t = "bag"
    // start backwards
    let n = s.length;
    let m = t.length;

    let dp = [];

    for (let i = 0; i <= n; i++) {
        dp[i] = [];
        for (let j = 0; j <= m; j++) {
            dp[i][j] = -1
        }
    }

    function recur(i, j) {
        // base case
        if (j < 0) {
            return 1;
        }
        if (i < 0) {
            return 0;
        }

        if (dp[i][j] !== -1) {
            return dp[i][j]
        }

        if (s[i] === t[j]) {
            let takeIt = recur(i - 1, j - 1);
            let skip = recur(i - 1, j);
            dp[i][j] = takeIt + skip;
            return dp[i][j]
        } else {
            let skip = recur(i - 1, j);
            dp[i][j] = skip;
            return dp[i][j];
        }
    }

    return recur(n - 1, m - 1)

};
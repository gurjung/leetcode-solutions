/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    // approach 1 -> recursion
    // let n = s.length;

    // function recur(i, j) {
    //     // base case

    //     if (i > j) {
    //         return 0
    //     }

    //     if (i === j) {
    //         return 1;
    //     }
    //     // two choices
    //     if (s[i] === s[j]) {
    //         // +2 because we get two characters already as s[i] and s[j]
    //         return recur(i + 1, j - 1) + 2;
    //     } else {
    //         let path1 = recur(i + 1, j);
    //         let path2 = recur(i, j - 1);
    //         return Math.max(path1, path2);
    //     }

    // }

    // return recur(0, n - 1);

    // // approach 2 -> recursion + memo
    // let n = s.length;

    // let dp = [];

    // for (let i = 0; i <= n; i++) {
    //     dp[i] = [];

    //     for (let j = 0; j <= n; j++) {
    //         dp[i][j] = -1;
    //     }
    // }

    // function recur(i, j) {
    //     // base case

    //     if (i > j) {
    //         return 0
    //     }

    //     if (i === j) {
    //         return 1;
    //     }

    //     if(dp[i][j] !== -1) {
    //         return dp[i][j]
    //     }
    //     // two choices
    //     if (s[i] === s[j]) {
    //         // +2 because we get two characters already as s[i] and s[j]
    //         dp[i][j] = recur(i + 1, j - 1) + 2;
    //         return dp[i][j];
    //     } else {
    //         let path1 = recur(i + 1, j);
    //         let path2 = recur(i, j - 1);
    //         dp[i][j] = Math.max(path1, path2);
    //         return dp[i][j];
    //     }

    // }

    // return recur(0, n - 1)


    // approach 3 -> tabulation

    let n = s.length;

    let dp = [];

    for (let i = 0; i <= n; i++) {
        dp[i] = [];

        for (let j = 0; j <= n; j++) {
            dp[i][j] = 0;
        }
    }

    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j <= n; j++) {

            // two choices
            if (s[i] === s[j]) {
                // +2 because we get two characters already as s[i] and s[j]
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                let path1 = dp[i + 1][j];
                let path2 = dp[i][j - 1];
                dp[i][j] = Math.max(path1, path2);
            }
        }
    }

    return dp[0][n - 1];
};
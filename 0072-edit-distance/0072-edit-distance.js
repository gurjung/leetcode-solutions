/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    // Approach 1 -> recursion

    // let m = word1.length;
    // let n = word2.length;

    // // word1 = "horse", word2 = "ros"
    // function recur(i, j) {

    //     // base case

    //     if (i >= m) {
    //         return n - j;
    //     }

    //     if (j >= n) {
    //         return m - i;
    //     }

    //     if (word1[i] !== word2[j]) {

    //         // three choices
    //         // insert
    //         let insert = 1 + recur(i, j + 1);
    //         // delete
    //         let deleteOp = 1 + recur(i + 1, j);
    //         // replace
    //         let replace = 1 + recur(i + 1, j + 1);

    //         return Math.min(insert, deleteOp, replace);

    //     } else {
    //         return recur(i + 1, j + 1);
    //     }

    // }

    // return recur(0, 0);

    // // Approach 2 -> recursion + memo

    // let m = word1.length;
    // let n = word2.length;

    // let dp = [];

    // for (let i = 0; i <= m; i++) {
    //     dp[i] = [];
    //     for (let j = 0; j <= n; j++) {
    //         dp[i][j] = -1;
    //     }
    // }

    // // word1 = "horse", word2 = "ros"
    // function recur(i, j) {

    //     // base case

    //     if (i >= m) {
    //         return n - j;
    //     }

    //     if (j >= n) {
    //         return m - i;
    //     }

    //     if (dp[i][j] !== -1) {
    //         return dp[i][j]
    //     }

    //     if (word1[i] !== word2[j]) {

    //         // three choices
    //         // insert
    //         let insert = 1 + recur(i, j + 1);
    //         // delete
    //         let deleteOp = 1 + recur(i + 1, j);
    //         // replace
    //         let replace = 1 + recur(i + 1, j + 1);

    //         dp[i][j] = Math.min(insert, deleteOp, replace);
    //         return dp[i][j]

    //     } else {
    //         dp[i][j] = recur(i + 1, j + 1);
    //         return dp[i][j]
    //     }

    // }

    // return recur(0, 0)

    // Approach 3 -> Tabulation

    let m = word1.length;
    let n = word2.length;

    let dp = [];

    for (let i = 0; i <= m; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            dp[i][j] = -1;
        }
    }

    for (let j = 0; j <= n; j++) {
        dp[m][j] = n - j;
    }

    for (let i = 0; i <= m; i++) {
        dp[i][n] = m - i;
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (word1[i] !== word2[j]) {

                // three choices
                // insert
                let insert = 1 + dp[i][j + 1];
                // delete
                let deleteOp = 1 + dp[i + 1][j];
                // replace
                let replace = 1 + dp[i + 1][j + 1];

                dp[i][j] = Math.min(insert, deleteOp, replace);

            } else {
                dp[i][j] = dp[i + 1][j + 1];
            }
        }
    }

    return dp[0][0]
};
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    // // recursion

    // let m = text1.length;
    // let n = text2.length;

    // function recur(i, j) {
    //     // base case

    //     if (i >= m || j >= n) {
    //         return 0;
    //     }

    //     if (text1[i] === text2[j]) {
    //         // one choice
    //         let path = 1 + recur(i + 1, j + 1);
    //         return path;
    //     } else {
    //         // two choices
    //         let path1 = recur(i + 1, j);
    //         let path2 = recur(i, j + 1);
    //         return Math.max(path1, path2)
    //     }

    // }

    // return recur(0, 0)


    // recursion + memo

    let m = text1.length;
    let n = text2.length;

    let dp = [];

    for (let i = 0; i <= m; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            dp[i][j] = -1;
        }
    }

    function recur(i, j) {
        // base case

        if (i >= m || j >= n) {
            return 0;
        }

        if (dp[i][j] !== -1) {
            return dp[i][j]
        }

        if (text1[i] === text2[j]) {
            // one choice
            let path = 1 + recur(i + 1, j + 1);
            dp[i][j] = path;
            return dp[i][j];
        } else {
            // two choices
            let path1 = recur(i + 1, j);
            let path2 = recur(i, j + 1);
            dp[i][j] = Math.max(path1, path2);
            return dp[i][j]
        }

    }

    return recur(0, 0)
};
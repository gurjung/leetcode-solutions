/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    // text1 = "abcde", text2 = "ace"
    // approach 1 -> recursion

    // function recur(i, j) {
    //     // base condition
    //     if (i >= text1.length || j > text2.length) {
    //         return 0;
    //     }

    //     if (text1[i] === text2[j]) {
    //         return 1 + recur(i + 1, j + 1)
    //     } else {
    //         let path1 = recur(i + 1, j);
    //         let path2 = recur(i, j + 1);
    //         return Math.max(path1, path2)
    //     }
    // }

    // return recur(0, 0)

    // approach 2 -> recursion + memo

    let dp = [];

    for (let i = 0; i <= text1.length; i++) {
        dp[i] = [];
        for (let j = 0; j <= text2.length; j++) {
            dp[i][j] = -1
        }
    }

    function recur(i, j) {
        // base condition
        if (i >= text1.length || j > text2.length) {
            return 0;
        }

        if (dp[i][j] !== -1) {
            return dp[i][j]
        }

        if (text1[i] === text2[j]) {
            dp[i][j] = 1 + recur(i + 1, j + 1)
            return dp[i][j];
        } else {
            let path1 = recur(i + 1, j);
            let path2 = recur(i, j + 1);
            dp[i][j] = Math.max(path1, path2)
            return dp[i][j];
        }
    }

    return recur(0, 0)
};
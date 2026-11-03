/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    // // recursion 
    // let n = text1.length;
    // let m = text2.length;

    // function recur(i, j) {
    //     // base case
    //     if (i >= n || j >= m) {
    //         return 0;
    //     }

    //     if (text1[i] === text2[j]) {
    //         // move both pointers
    //         let path1 = 1 + recur(i + 1, j + 1)
    //         return path1;
    //     } else {
    //         // two paths
    //         let path1 = recur(i + 1, j);
    //         let path2 = recur(i, j + 1);
    //         return Math.max(path1, path2)
    //     }

    // }

    // return recur(0, 0)


    // recursion + memo

    let n = text1.length;
    let m = text2.length;

    let dp = [];

    for (let i = 0; i < n; i++) {
        dp[i] = [];
        for (let j = 0; j < m; j++) {
            dp[i][j] = -1
        }
    }

    function recur(i, j) {
        // base case
        if (i >= n || j >= m) {
            return 0;
        }

        if (dp[i][j] !== -1) {
            return dp[i][j]
        }

        if (text1[i] === text2[j]) {
            // move both pointers
            dp[i][j] = 1 + recur(i + 1, j + 1)
            return dp[i][j];
        } else {
            // two paths
            let path1 = recur(i + 1, j);
            let path2 = recur(i, j + 1);
            dp[i][j] = Math.max(path1, path2)
            return dp[i][j]
        }

    }

    return recur(0, 0)
};
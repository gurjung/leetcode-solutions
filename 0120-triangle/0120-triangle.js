/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    // let n = triangle.length;
    // function recur(i, j) {
    //     if (i === n - 1) {
    //         return triangle[i][j]
    //     }
    //     // two paths
    //     let path1 = recur(i + 1, j);
    //     let path2 = recur(i + 1, j + 1)

    //     return triangle[i][j] + Math.min(path1, path2)
    // }

    // return recur(0, 0)

    //recursion + memo
    if (triangle.length === 0) return 0;
    let n = triangle.length;

    let dp = [];
    for (let i = 0; i <= n; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            dp[i][j] = null
        }
    }
    function recur(i, j) {
        if (i === n - 1) {
            return triangle[i][j]
        }

        if (dp[i][j] !== null) {
            return dp[i][j]
        }
        // two paths
        let path1 = recur(i + 1, j);
        let path2 = recur(i + 1, j + 1)
        let currVal = triangle[i][j]
        dp[i][j] = currVal + Math.min(path1, path2)
        return dp[i][j];
    }

    return recur(0, 0)
};
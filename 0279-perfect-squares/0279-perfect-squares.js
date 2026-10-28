/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    // function recur(target) {
    //     let ans = Infinity;

    //     if (target === 0) {
    //         return 0;
    //     }
    //     for (let i = 1; i * i <= target; i++) {
    //         let temp = 1 + recur(target - (i * i));
    //         ans = Math.min(temp, ans)
    //     }
    //     return ans;
    // }

    // return recur(n)

    let dp = new Array(n + 1).fill(-1)
    function recur(target) {
        let ans = Infinity;

        if (target === 0) {
            return 0;
        }

        if (dp[target] !== -1) {
            return dp[target]
        }

        for (let i = 1; i * i <= target; i++) {
            let temp = 1 + recur(target - (i * i));
            ans = Math.min(temp, ans)
        }
        dp[target] = ans;
        return dp[target];
    }

    return recur(n)


};
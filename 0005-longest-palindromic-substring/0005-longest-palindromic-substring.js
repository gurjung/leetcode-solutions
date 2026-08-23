/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let n = s.length;
    // create dp array of size n * n with intial false value
    let dp = [];
    let ans = [0, 0];

    for (let i = 0; i <= n; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            dp[i][j] = false;
        }
    }
    // base case filling with length 1
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        // ans++;
    }

    // base case filling with length 2
    for (let i = 0; i < n; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            ans = [i, i + 1]
        }
    }

    // from length 3 -> 
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1] === true) {
                dp[i][j] = true;
                ans = [i, j]
            }
        }
    }

    return s.substring(ans[0], ans[1] + 1)
};
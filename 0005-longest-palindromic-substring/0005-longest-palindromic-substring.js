/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    // Approach -> DP O(n2)
    let n = s.length;

    let ans = [0, 0]; // store index start and end

    let dp = []; // represents isPalindrome or not

    for (let i = 0; i <= n; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            dp[i][j] = false;
        }
    }

    // base case of length 1 string
    for (let i = 0; i < n; i++) {
        // "abc" -> "a", "b", "c"
        dp[i][i] = true;
    }

    // base case of length 2 strings
    for (let i = 0; i < n - 1; i++) {
        // "abc" -> "ab", "bc"
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            ans = [i, i + 1]
        }
    }

    // raceacar

    for (let i = 2; i < n; i++) {
        for (let j = 0; j < n - i + 1; j++) {
            let start = j;
            let end = j + i;

            if (s[start] === s[end] && dp[start + 1][end - 1] === true) {
                dp[start][end] = true
                ans = [start, end]
            }
        }
    }

    return s.substring(ans[0], ans[1] + 1)
};
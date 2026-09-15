/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function (s, k) {
    // dp

    let n = s.length;
    let ans = 0;

    let dp = [];

    for (let i = 0; i < n; i++) {
        dp[i] = [];

        for (let j = 0; j < n; j++) {
            dp[i][j] = false
        }
    }

    // base case of length 1 substring
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    // base case of length 2 substring

    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
        }
    }

    // for substrings of length >= 3

    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1
            if ((s[i] === s[j] && dp[i + 1][j - 1])) {
                dp[i][j] = true;
            }
        }
    }


    // Greedy: choose palindrome with earliest ending index
    let prevEnd = -1;

    for (let end = 0; end < n; end++) {
        for (let start = prevEnd + 1; start <= end - k + 1; start++) {

            if (dp[start][end]) {
                ans++;
                prevEnd = end;
                break;
            }
        }
    }

    return ans;
};
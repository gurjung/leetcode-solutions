/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    // // Approach -> recursion O(n3)
    // let result = []

    // function isPalindrome(str) {
    //     let low = 0;
    //     let high = str.length - 1;

    //     while (low <= high) {
    //         if (str[low] !== str[high]) {
    //             return false;
    //         }
    //         low++;
    //         high--;
    //     }
    //     return true;
    // }

    // function recur(start, end) {

    //     if(start === s.length) {
    //         return;
    //     }

    //     if(end === s.length) {
    //         recur(start + 1, start + 1);
    //         return;
    //     }

    //     let substring = s.slice(start, end + 1);
    //     if (isPalindrome(substring)) {
    //         result.push(substring);
    //     }
    //     recur(start, end + 1)

    // }

    // recur(0, 0)

    // return result.length


    // Approach -> DP O(n2)
    let n = s.length;

    let ans = 0;

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
        ans++;
    }

    // base case of length 2 strings
    for (let i = 0; i < n - 1; i++) {
        // "abc" -> "ab", "bc"
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            ans++;
        }
    }

    // raceacar

    for (let i = 2; i < n; i++) {
        for (let j = 0; j < n - i + 1; j++) {
            let start = j;
            let end = j + i;

            if (s[start] === s[end] && dp[start + 1][end - 1] === true) {
                dp[start][end] = true
                ans++;
            }
        }
    }

    return ans



};
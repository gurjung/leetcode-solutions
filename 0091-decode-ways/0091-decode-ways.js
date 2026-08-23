/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    // approach 1 -> recursion
    // s = "226"
    // start from backwards -> oneDigit = "6" and TwoDigit = "26"
    // let ans = 0;
    // function recur(remS) {
    //     // base case
    //     if (remS === "") {
    //         return 1;
    //     }
    //     let n = remS.length;
    //     let ans = 0;
    //     let oneDigit = remS.substring(n - 1);
    //     if (oneDigit !== "0") {
    //         ans = ans + recur(remS.substring(0, n - 1))
    //     }
    //     if (n >= 2) {
    //         let twoDigit = Number(remS.substring(n - 2));
    //         if (twoDigit >= 10 && twoDigit <= 26) {
    //             ans = ans + recur(remS.substring(0, n - 2))
    //         }
    //     }

    //     return ans;
    // }

    // return recur(s)

    // // Approach 2 -> recursion + memo

    // let dp = {}

    // function recur(remS) {
    //     // base case
    //     if (remS === "") {
    //         return 1;
    //     }
    //     if(remS in dp) {
    //         return dp[remS]
    //     }
    //     let n = remS.length;
    //     let ans = 0;
    //     let oneDigit = remS.substring(n - 1);
    //     if (oneDigit !== "0") {
    //         ans = ans + recur(remS.substring(0, n - 1))
    //     }
    //     if (n >= 2) {
    //         let twoDigit = Number(remS.substring(n - 2));
    //         if (twoDigit >= 10 && twoDigit <= 26) {
    //             ans = ans + recur(remS.substring(0, n - 2))
    //         }
    //     }

    //     dp[remS] = ans;
    //     return dp[remS]
    // }

    // return recur(s)

    // Approach 3 -> recursion + memo
     let n = s.length;

    let dp = new Array(n + 1).fill(0);
    // dp[i] === length of remString
    // dp[0] = ""
    // dp[1] = "2"
    // dp[2] = "26"
    // dp[3] = "226"

    // base case 
    dp[0] = 1; // remS === " " return 1 from recursion solution

    for (let i = 1; i <= n; i++) {
        if (s[i - 1] !== "0") {
            dp[i] = dp[i] + dp[i - 1]
        }

        if (i >= 2) {
            let twoDigit = Number(s.substring(i - 2, i));
            if (twoDigit >= 10 && twoDigit <= 26) {
                 dp[i] = dp[i] + dp[i - 2]
            }
        }
    }

    return dp[n]
};
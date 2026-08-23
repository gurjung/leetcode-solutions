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

    // Approach 2 -> recursion + memo

    let dp = {}

    function recur(remS) {
        // base case
        if (remS === "") {
            return 1;
        }
        if(remS in dp) {
            return dp[remS]
        }
        let n = remS.length;
        let ans = 0;
        let oneDigit = remS.substring(n - 1);
        if (oneDigit !== "0") {
            ans = ans + recur(remS.substring(0, n - 1))
        }
        if (n >= 2) {
            let twoDigit = Number(remS.substring(n - 2));
            if (twoDigit >= 10 && twoDigit <= 26) {
                ans = ans + recur(remS.substring(0, n - 2))
            }
        }

        dp[remS] = ans;
        return dp[remS]
    }

    return recur(s)
};
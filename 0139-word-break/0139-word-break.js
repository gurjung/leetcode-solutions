/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    // // approach 1 -> recursion

    // function recur(remStr) {
    //     // base case
    //     if (remStr === "") return true;

    //     let ans = false;
    //     for (let i = 0; i < remStr.length; i++) {
    //         let substr = remStr.substring(0, i + 1);
    //         if (wordDict.includes(substr) && recur(remStr.substring(i + 1))) {
    //             ans = true;
    //         }
    //     }
    //     return ans;
    // }

    // return recur(s)

    // approach 2 -> recursion + memo

    let dp = {};
    let wordSet = new Set(wordDict);

    function recur(remStr) {
        // base case
        if (remStr === "") return true;

        if (remStr in dp) return dp[remStr];

        let ans = false;
        for (let i = 0; i < remStr.length; i++) {
            let substr = remStr.substring(0, i + 1);
            if (wordSet.has(substr) && recur(remStr.substring(i + 1))) {
                ans = true;
                break;
            }
        }
        dp[remStr] = ans;
        return dp[remStr]
    }

    return recur(s)
};
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    // Brian Kernighan's Algorithm
    // let ans = 0;
    // while (n > 0) {
    //     ans++
    //     n = n & (n - 1)
    // }
    // return ans;

    // Approach 2 ->
    let result = 0;
    for (let i = 0; i <= 31; i++) {
        if ((1 << i) & n) result++;
    }
    return result
};
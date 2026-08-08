/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    // Brian Kernighan's Algorithm
    let ans = 0;
    while (n > 0) {
        ans++
        n = n & (n - 1)
    }
    return ans
};
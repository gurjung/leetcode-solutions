/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    // 00001011
    // 11111111
    // 00001011
    let ans = 0
    for (let i = 0; i <= 31; i++) {
        if ((1 << i) & n) {
            ans++;
        }
    }

    return ans
};
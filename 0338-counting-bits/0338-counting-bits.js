/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    // // Approach 1 -> O(n log n)

    // let ans = [];

    // function countOnes(num) {
    //     let res = 0;
    //     while (num > 0) {
    //         if (num % 2 === 1) {
    //             res++;
    //         }

    //         num = Math.floor(num / 2)
    //     }
    //     return res;
    // }

    // for (let i = 0; i <= n; i++) {
    //     ans.push(countOnes(i))
    // }

    // return ans

    // Approach 2 -> DP

    // bits(i) = bits(i / 2) + lastBit

    // i = 5 -> bits(2) + 1 => 1 + 1 => 2

    // i / 2 => right shift by 1

    // last bit => num & 1

    let ans = new Array(n + 1).fill(0);

    for (let i = 0; i <= n; i++) {
        ans[i] = ans[i >> 1] + (i & 1)
    }

    return ans
};
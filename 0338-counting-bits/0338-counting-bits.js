/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    // Approach 1 -> O(n log n)

    let ans = [];

    function countOnes(num) {
        let res = 0;
        while (num > 0) {
            if (num % 2 === 1) {
                res++;
            }

            num = Math.floor(num / 2)
        }
        return res;
    }

    for (let i = 0; i <= n; i++) {
        ans.push(countOnes(i))
    }

    return ans
};
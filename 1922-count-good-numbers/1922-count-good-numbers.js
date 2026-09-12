/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
    // n = 2
    // n = 1 -> "0", "2", "4", "6", "8" = 5
    // n = 2 ->  "02", "03", "05", "07", "22", "23", "25", "27" = 20
    // n = 3 -> 20 * 5 (0,2,4,6,8) = 100
    // let MOD = 1e9 + 7;

    // let odd = 4;
    // let even = 5;

    // function recur(limit) {
    //     // limit shows place of digit
    //     if (limit === 0) {
    //         return even;
    //     }

    //     let val = recur(limit - 1);
    //     if (limit % 2 === 0) {
    //         // even place
    //         return val * even % MOD;
    //     } else {
    //         // odd place
    //         // only prime numbers can be placed (2,3,5,7)
    //         return val * odd % MOD;
    //     }
    // }

    // let res = recur(n - 1);
    // return res;

    // Approach -> optimised

    // let MOD = 1e9 + 7;
    const MOD = 1000000007n; // BigInt

    let odd = 4;
    let even = 5;
    // n = 5
    // 5 * 4 * 5 * 4 * 5

    // even positions = ceil(n / 2)
    // odd positions = floor(n / 2)

    function recur(num, pow) {
        // myPow solution is used here
        if (pow === 0) {
            return 1n
        }

        let val = recur(num, Math.floor(pow / 2));

        if (pow % 2 === 0) {
            return (val * val) % MOD
        } else {
            return (val * val * BigInt(num)) % MOD
        }
    }

    let evenCount = Math.ceil(n / 2);
    let oddCount = Math.floor(n / 2);

    let evenRes = recur(even, evenCount);
    let oddRes = recur(odd, oddCount);
    return Number((evenRes * oddRes) % MOD);

};
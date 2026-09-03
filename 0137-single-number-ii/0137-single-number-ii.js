/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    // Approach 1 -> brute force
    // let freqMap = {};
    // for (let i = 0; i < nums.length; i++) {
    //     let val = nums[i];
    //     if (freqMap[val]) {
    //         freqMap[val] = freqMap[val] + 1
    //     } else {
    //         freqMap[val] = 1
    //     }
    // }

    // for (let key in freqMap) {
    //     if (freqMap[key] === 1) {
    //         return Number(key)
    //     }
    // }

    // Approach 2 -> optimized
    // we count set bit on every position and then count % 3
    // (1 << 0) => 2^0
    let ans = 0;
    for (let k = 0; k < 32; k++) {
        let count = 0;
        for (let num of nums) {
            if (num & (1 << k)) {
                count++;
            }
        }
        if (count % 3 !== 0) {
            ans = ans | (1 << k)
        }
    }

    return ans

};
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    // Approach 1 -> brute force
    let freqMap = {};
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (freqMap[val]) {
            freqMap[val] = freqMap[val] + 1
        } else {
            freqMap[val] = 1
        }
    }

    for (let key in freqMap) {
        if (freqMap[key] === 1) {
            return Number(key)
        }
    }
};
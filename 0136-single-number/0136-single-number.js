/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    // Approach -> same value xor will give 0
    // 0 ^ x => x

    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }

    return result
};
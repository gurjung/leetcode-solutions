/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let totalSum = 0
    for (let i = 0; i <= nums.length; i++) {
        totalSum = totalSum + i;
    }

    // actual
    let actualSum = nums.reduce((acc, curr) => acc + curr, 0);

    return totalSum - actualSum
};
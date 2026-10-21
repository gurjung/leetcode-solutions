/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // using set

    let visitedSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (visitedSet.has(nums[i])) {
            return true;
        } else {
            visitedSet.add(nums[i])
        }
    }
    return false;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // nums = [0,3,7,2,5,8,4,6,0,1]
    // brute force -> with sorting O(nlogn)
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);
    let maxLength = 1;
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;

        if (nums[i] === nums[i - 1] + 1) {
            count++;
        } else {
            count = 1;
        }

        maxLength = Math.max(maxLength, count);

    }

    return maxLength

};
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {

    let left = 0;
    let right = 0;
    let currSum = 0;
    let ans = +Infinity;

    while (right < nums.length) {
        // target = 7, nums = [2,3,1,2,4,3]
        
        currSum = currSum + nums[right];

        while (currSum >= target) {
            ans = Math.min(ans, right - left + 1);
            currSum = currSum - nums[left];
            left++;
        }

        right++;


    }

    return ans === +Infinity ? 0 : ans
};
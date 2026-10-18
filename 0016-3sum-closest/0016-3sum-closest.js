/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let result = 0;
    let minDiff = +Infinity;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {

            let sum = nums[i] + nums[left] + nums[right];
            
            let currDiff = Math.abs(sum - target);

            if (currDiff < minDiff) {
                minDiff = currDiff;
                result = sum;
            }
            if (sum === target) {
                return sum;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

    }

    return result;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    // nums = [4,5,6,7,0,1,2]
    // l = 4, h = 4, m = 4
    let min = Infinity;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (nums[mid] > nums[n - 1]) {
            low = mid + 1
        } else {
            min = Math.min(min, nums[mid]);
            high = mid - 1;
        }
    }

    return min
};
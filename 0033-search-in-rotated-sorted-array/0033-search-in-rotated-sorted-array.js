/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (nums[mid] === target) {
            return mid
        }
        // left half sorted
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            }
            else {
                low = mid + 1;
            }

        }
        // right half 
        else {
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1
            }
        }
    }

    return -1
};
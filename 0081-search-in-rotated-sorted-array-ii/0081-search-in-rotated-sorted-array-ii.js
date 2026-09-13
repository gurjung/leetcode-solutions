/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (nums[mid] === target) return true;

        // remove duplicates issue

        if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
            low++;
            high--;
            continue;
        }

        // Left half is sorted
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        // Right half is sorted
        else {
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return false;
};
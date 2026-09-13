/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    // nums = [4,5,6,7,0,1,2]
    // l = 4, h = 4, m = 4
    let min = -1;
    // let minIdx = n;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > nums[n - 1]) {
            low = mid + 1
        } else {
            // minIdx = mid;
            min = mid
            high = mid - 1;
        }
    }

    if (target >= nums[min] && target <= nums[n - 1] ) {
        low = min;
        high = n - 1;
    } else {
        low = 0;
        high = min - 1;
    }
    // normal bs
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1;
};
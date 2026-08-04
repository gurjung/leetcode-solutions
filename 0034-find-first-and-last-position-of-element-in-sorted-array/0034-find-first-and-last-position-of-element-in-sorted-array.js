/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (arr, target) {
    // find first position
    let low = 0;
    let high = arr.length - 1;
    let first = -1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (arr[mid] > target) {
            high = mid - 1;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            first = mid;
            high = mid - 1; // to make sure it is first occurence
        }
    }

    low = 0;
    high = arr.length - 1;
    let last = -1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (arr[mid] > target) {
            high = mid - 1;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            last = mid;
            low = mid + 1;
        }
    }

    return [first, last]
};
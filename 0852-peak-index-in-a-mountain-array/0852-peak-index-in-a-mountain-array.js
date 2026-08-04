/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let low = 0;
    let high = arr.length;
    let peak = 0;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (arr[mid] < arr[mid + 1]) {
            low = mid + 1; // climbing phase
        } else {
            peak = mid; // Descending phase
            high = mid - 1; // to make sure this is first occurence
        }
    }

    return peak
};
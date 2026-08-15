/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let low = 0;
    let high = arr.length - 1;
    // low and high => indexes

    let peak = 0;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (arr[mid] < arr[mid + 1]) {
            low = mid + 1; // climbing phase
        } else {
            peak = mid; 
            high = mid - 1; // down phase and to make sure it is first occurence
        }
    }

    return peak

};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (arr) {
    // need to check first occurence where it starts decreasing
    // nums = [4,5,6,7,0,1,2]
    // l = 4 => 
    // r = 6 
    // m = 5
    // val = 1
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    let min = Infinity;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] <= arr[n - 1]) {
            min = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    }
    return arr[min]
};
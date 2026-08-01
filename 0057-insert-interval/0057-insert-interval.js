/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (arr, x) {
    // Approach 1 -> 
    let result = [];
    // left non overlapping part
    let i = 0;
    while (i < arr.length && arr[i][1] < x[0]) {
        result.push(arr[i]);
        i++;
    }

    // overlapping part
    while (i < arr.length && arr[i][0] <= x[1]) {
        x[0] = Math.min(x[0], arr[i][0]);
        x[1] = Math.max(x[1], arr[i][1]);
        i++;
    }
    result.push(x);
    // right non overlapping part
    while (i < arr.length) {
        result.push(arr[i])
        i++;
    }
    return result;
};
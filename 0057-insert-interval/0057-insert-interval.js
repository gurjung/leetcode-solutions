/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    // add new interval inside intervals array
    // sort the array based on starting time
    // apply merge interval solution on top of it

    let arr = [];

    arr.push(newInterval);

    for (let i = 0; i < intervals.length; i++) {
        arr.push(intervals[i])
    }

    arr.sort((a, b) => a[0] - b[0]);

    let result = [];

    result.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let s2 = arr[i][0];
        let e2 = arr[i][1];
        let e1 = result[result.length - 1][1];

        if (s2 <= e1) {
            // merge the intervals
            result[result.length - 1][1] = Math.max(e1, e2);
        } else {
            result.push(arr[i]);
        }
    }

    return result;
};
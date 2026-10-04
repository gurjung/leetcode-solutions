/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1]);

    let end1 = intervals[0][1];

    let ans = 0;

    for (let i = 1; i < intervals.length; i++) {
        let start2 = intervals[i][0];
        if (start2 < end1) {
            ans++;
        } else {
            end1 = intervals[i][1];
        }
    }

    return ans
};
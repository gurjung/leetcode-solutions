/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function (intervals) {
    // optimized approach

    let startTime = intervals.map((x) => x[0]);
    let endTime = intervals.map((y) => y[1]);

    startTime.sort((a, b) => a - b);
    endTime.sort((a, b) => a - b);

    // startTime always less than endTime so it exhaust first
    let l = r = 0;
    // l pointer for startTime tracking
    // r pointer for endTime tracking
    let count = 0;
    let maxCount = 0;
    while (l < intervals.length) {
        if (startTime[l] <= endTime[r]) {
            count++;
            l++;
            maxCount = Math.max(maxCount, count);
        } else {
            count--;
            r++;
        }
    }
    return maxCount
};
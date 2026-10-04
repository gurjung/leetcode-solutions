/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let finalAns = [];
    finalAns.push(intervals[0]);

    for (let i = 1; i < intervals.length; i++) {
        let start2 = intervals[i][0];
        let end2 = intervals[i][1];
        let end1 = finalAns[finalAns.length - 1][1];
        if (start2 <= end1) {
            //merge the intervals
            // start1 is always min because we sorted
            finalAns[finalAns.length - 1][1] = Math.max(end1, end2);

        } else {
            finalAns.push(intervals[i])
        }
    }
    return finalAns;
};
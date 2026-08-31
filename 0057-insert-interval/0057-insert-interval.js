/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    // add new interval inside intervals array
    // sort the array based on starting time
    // apply merge interval solution on top of it

    let newList = [];

    newList.push(newInterval);

    for (let i = 0; i < intervals.length; i++) {
        newList.push(intervals[i])
    }

    newList.sort((a, b) => a[0] - b[0]);
    let result = [];
    result.push(newList[0]);
    //[ [ 1, 3 ], [ 2, 5 ], [ 6, 9 ] ]
    for (let i = 1; i < newList.length; i++) {
        // s1 = 1 , e1 = 3
        // s2 = 2,  e2 = 5
        let s2 = newList[i][0];
        let e1 = result[result.length - 1][1];

        if (s2 <= e1) {
            let e2 = newList[i][1];
            result[result.length - 1][1] = Math.max(e1, e2);
        } else {
            result.push(newList[i])
        }
    }

    return result
};
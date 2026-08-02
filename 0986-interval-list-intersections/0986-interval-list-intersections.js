/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
    // Approach -> 2 pointer with intervals
    let n = firstList.length;
    let m = secondList.length;
    let i = j = 0;

    let res = []

    while (i < n && j < m) {
        let s1 = firstList[i][0]; // start1
        let e1 = firstList[i][1];
        let s2 = secondList[j][0];
        let e2 = secondList[j][1];

        // check for overlap condition
        if (s1 <= s2) {
            if (e1 >= s2) {
                // overlapped, calc intersection points
                res.push([Math.max(s1, s2), Math.min(e1, e2)])
            }
        } else {
            if (e2 >= s1) {
                // overlapped, calc intersection points
                res.push([Math.max(s1, s2), Math.min(e1, e2)])
            }
        }

        if (e1 <= e2) {
            i++;
        } else {
            j++;
        }
    }

    return res
};
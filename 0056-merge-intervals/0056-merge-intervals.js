/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (arr) {
    arr.sort((a, b) => a[0] - b[0]); // sort based on start time

    let ans = [];

    ans.push(arr[0]); // push 1st interval for comparison and 1st is smallest since it is sorted

    for (let i = 1; i < arr.length; i++) {
        // for i = 1
        let start2 = arr[i][0]; // 2
        let end1 = ans[ans.length - 1][1]; // 3
        if (start2 <= end1) {
            // overlapping case
            let end2 = arr[i][1]; // 6
            ans[ans.length - 1][1] = Math.max(end1, end2)
        } else {
            ans.push(arr[i])
        }
    }

    return ans;
};
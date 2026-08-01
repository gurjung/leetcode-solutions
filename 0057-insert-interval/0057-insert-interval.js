/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (arr, x) {
    // Approach 1 -> 
    // let result = [];
    // // left non overlapping part
    // let i = 0;
    // while (i < arr.length && arr[i][1] < x[0]) {
    //     result.push(arr[i]);
    //     i++;
    // }

    // // overlapping part
    // while (i < arr.length && arr[i][0] <= x[1]) {
    //     x[0] = Math.min(x[0], arr[i][0]);
    //     x[1] = Math.max(x[1], arr[i][1]);
    //     i++;
    // }
    // result.push(x);
    // // right non overlapping part
    // while (i < arr.length) {
    //     result.push(arr[i])
    //     i++;
    // }
    // return result;

    // Appraoch 2 -> insert + merge

    let newArr = []; // to hold new list (old list + new interval)
    let insertedFlag = false;

    for (let i = 0; i < arr.length; i++) {
        let start = arr[i][0];
        if (!insertedFlag && start >= x[0]) {
            newArr.push(x);
            insertedFlag = true;
        }
        newArr.push(arr[i]);
    }
    if (!insertedFlag) {
        newArr.push(x);
    }

    console.log(newArr, 'debug')

    // now apply merge interval here on new list
    // [ [ 1, 2 ], [ 3, 5 ], [ 4, 8 ], [ 6, 7 ], [ 8, 10 ], [ 12, 16 ] ]
    let ans = [];
    ans.push(newArr[0]);

    for (let i = 1; i < newArr.length; i++) {
        let start2 = newArr[i][0];
        let end1 = ans[ans.length - 1][1];
        if (start2 <= end1) {
            let end2 = newArr[i][1];
            ans[ans.length - 1][1] = Math.max(end1, end2);
        } else {
            ans.push(newArr[i])
        }

    }

    return ans

};
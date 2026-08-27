/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = [];
    // i = i-1, j + i-1,j-1
    for (let i = 0; i < numRows; i++) {
        let temp = [1];
        if (i === 0) {
            res.push(temp);
            continue;
        }

        for (let j = 1; j < i; j++) {
            let val = res[i - 1][j] + res[i - 1][j - 1]
            temp.push(val)
        }

        temp.push(1);
        res.push(temp);
    }

    return res;
};
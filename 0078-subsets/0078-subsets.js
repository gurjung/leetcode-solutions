/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (arr) {
    let temp = [];
    let result = [];
    let n = arr.length;

    function recur(temp, p) {
        // base case
        if (p === n) {
            result.push([...temp]);
            return;
        }

        // recursive step and process
        // take it
        temp.push(arr[p]);
        recur(temp, p + 1);
        // not take it
        temp.pop();
        recur(temp, p + 1);

    }

    recur(temp, 0)
    return result
};
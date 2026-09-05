/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (arr) {

    let cost = 0;
    let maxHeight = Math.max(...arr);

    for (let i = 0; i < arr.length; i++) {
        cost = cost + maxHeight - arr[i]; // sabko maxHeight tak grow karo
    }
    return cost;
};
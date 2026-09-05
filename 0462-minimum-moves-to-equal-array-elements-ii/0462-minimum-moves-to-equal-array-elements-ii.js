/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (arr) {
    // let minCost = Infinity;

    // for (let h = 0; h < arr.length; h++) {
    //     let currentCost = 0;

    //     for (let i = 0; i < arr.length; i++) {
    //         currentCost += Math.abs(arr[i] - arr[h]);
    //     }

    //     minCost = Math.min(minCost, currentCost);
    // }

    // return minCost;

    // Approach 2 -> use median because everything getting close to median will reduce cost
    arr.sort((a, b) => a - b);

    let medianIdx = Math.floor(arr.length / 2)

    let moves = 0;

    for (const num of arr) {
        moves = moves + Math.abs(num - arr[medianIdx]);
    }

    return moves;

};
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (arr) {
    let minCost = Infinity;

    for (let h = 0; h < arr.length; h++) {
        let currentCost = 0;

        for (let i = 0; i < arr.length; i++) {
            currentCost += Math.abs(arr[i] - arr[h]);
        }
        
        minCost = Math.min(minCost, currentCost);
    }

    return minCost;
};
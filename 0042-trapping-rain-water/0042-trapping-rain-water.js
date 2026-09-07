/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (arr) {
    // Approach 1 -> prefix max and suffix max
    // water can be only stored if left and right buildings have height > curr building height
    let n = arr.length;
    // [4,2,0,3,2,5]
    // [4, 6, 6, 9, 11, 16]

    //prefix max
    let maxL = Array(n).fill(0);
    maxL[0] = arr[0]
    for (let i = 1; i < n; i++) {
        maxL[i] = Math.max(maxL[i - 1], arr[i])
    }


    // suffix max
    let maxR = Array(n).fill(0);
    maxR[n - 1] = arr[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        maxR[i] = Math.max(maxR[i + 1], arr[i])
    }

    let total = 0;

    for (let i = 0; i < n; i++) {
        total = total + Math.min(maxL[i], maxR[i]) - arr[i]
    }

    return total
};
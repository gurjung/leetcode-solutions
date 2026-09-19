/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    // brute force
    let num = 1;

    while (k > 0) {
        if (!arr.includes(num)) {
            k--;
        }

        if (k === 0) {
            return num;
        }

        num++;
    }
};
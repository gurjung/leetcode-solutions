/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
    // if k = 1 then minsum = sum of all elements
    // similar to allocate books, painter partition
    let low = Math.min(...nums);
    let high = nums.reduce((acc, curr) => acc + curr, 0) // k = 1 worst case
    let ans = 0

    function isPossible(splits, maxSum, arr) {
        let sum = 0;
        let n = 1; // n is no of splits required
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maxSum) return false;
            if (sum + arr[i] <= maxSum) {
                sum = sum + arr[i]
            } else {
                n++;
                sum = arr[i]
            }
        }
        if (n > splits) return false;
        return true;
    }

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        // assuming mid is maxSum
        let isValid = isPossible(k, mid, nums)
        if (isValid) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }
    return ans

};
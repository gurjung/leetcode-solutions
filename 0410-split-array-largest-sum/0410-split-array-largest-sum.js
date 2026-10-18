/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
    // similar to painter partition problem

    let low = Math.min(...nums);
    // for k=1 worst case -> whole array sum
    let high = nums.reduce((acc, curr) => acc + curr, 0)
    
    let ans = high;

    function isPossible(splits, maxSum) {
        let n = 1; // minimum 1 split
        let sum = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > maxSum) return false;

            if (sum + nums[i] <= maxSum) {
                sum = sum + nums[i];
            } else {
                n++;
                sum = nums[i];
            }
        }

        if (n > splits) return false;
        return true;
    }

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        let possible = isPossible(k, mid);

        if (possible) {
            // if possible then find smaller than this
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
};
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
    let low = 0;
    let high = Math.max(...nums);

    function isValid(num) {
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum = sum + Math.ceil(nums[i] / num);
        }
        if (sum > threshold) {
            return false
        } else {
            return true;
        }
    }
    
    let ans = high;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let valid = isValid(mid);

        if (valid) {
            ans = Math.min(ans, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;

};
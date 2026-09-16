/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {

    let left = 0;
    let right = 0;
    let dq = []; // store indexes
    let ans = [];
    while (right < nums.length) {
        while (dq.length && nums[dq[dq.length - 1]] < nums[right]) {
            dq.pop();
        }

        dq.push(right);

        if (dq[0] < left) {
            // out of window
            dq.shift();
        }

        let width = right - left + 1;

        if (width === k) {
            // valid window
            let val = nums[dq[0]];
            ans.push(val)
            left++;
        }

        right++;
    }

    return ans;
};
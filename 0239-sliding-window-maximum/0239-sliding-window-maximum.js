/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let q = []; // store indexes

    let left = 0;
    let right = 0;

    let ans = [];
    // q = [1, -1]
    // ans = [1]
    while (right < nums.length) {
        while (q.length && nums[q[q.length - 1]] < nums[right]) {
            q.pop();
        }

        if(q[0] < left) {
            q.shift();
        }

        q.push(right)

        if (right - left + 1 === k) {
            // valid window
            let val = nums[q[0]];
            ans.push(val);
            left++

        }
        right++;
    }
    return ans
};
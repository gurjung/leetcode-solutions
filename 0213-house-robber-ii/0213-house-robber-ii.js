/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length;

    if (n === 1) return nums[0];

    function recur(start, end) {
        let p1 = 0;
        let p2 = 0;

        for (let i = start; i <= end; i++) {
            let rob = nums[i] + p2;
            let skip = p1;
            let curr = Math.max(rob, skip);

            p2 = p1;
            p1 = curr;

        }
        return p1
    }

    return Math.max(recur(0, n - 2), recur(1, n - 1))
};
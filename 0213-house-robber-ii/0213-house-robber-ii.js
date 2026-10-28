/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // if 1st house then can't last and vice -versa
    let n = nums.length;
    if (n === 1) return nums[0];
    // let p1 = p2 = 0;
    function recur(start, end) {
        let p1 = 0, p2 = 0;
        for (let i = start; i < end; i++) {
            // two choices we have
            // take it (considering current home)
            let take = nums[i] + p1;
            // skip
            let skip = p2;

            let curr = Math.max(take, skip);
            let temp = p2;
            p2 = curr;
            p1 = temp;
        }
        return p2
    }

    return Math.max(recur(0, n - 1), recur(1, n))
};
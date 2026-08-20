/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let totalSum = nums.reduce((arr, curr) => arr + curr, 0);

    // pos + neg = totalSum
    // pos - neg = target
    // 2pos = totalSum + target

    if ((totalSum + target) % 2 !== 0) return 0;

    if (totalSum < Math.abs(target)) return 0;

    let pos = (totalSum + target) / 2;

    function recur(sum, p) {
        // base condition
        if(p === nums.length) {
            if(sum === 0) {
                return 1;
            } else {
                return 0;
            }
        }

        // two choices
        let skip = recur(sum, p + 1)
        let takeIt = 0
        if (nums[p] <= sum) {
            takeIt = recur(sum - nums[p], p + 1);
        }
        return takeIt + skip
    }

    return recur(pos, 0)
};
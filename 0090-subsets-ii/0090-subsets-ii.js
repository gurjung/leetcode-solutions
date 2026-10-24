/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let result = [];
    let temp = [];
    let n = nums.length;
    // [1,2,2], [1,2]
    // []
    function recur(p) {
        // base condition
        if (p >= n) {
            result.push([...temp]);
            return;
        }

        // process and recursive step
        // take it
        temp.push(nums[p]);
        recur(p + 1);

        // skip
        temp.pop();
        while (nums[p] === nums[p + 1]) {
            p++;
        }
        recur(p + 1)

    }

    recur(0)
    return result
};
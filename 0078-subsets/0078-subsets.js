/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = [];
    let temp = [];
    let n = nums.length;
    // [1,2,3], [1,2]
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
        recur(p + 1)

    }

    recur(0)
    return result
};
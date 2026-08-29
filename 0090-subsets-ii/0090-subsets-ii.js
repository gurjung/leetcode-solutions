/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let result = [];
    let temp = [];
    let n = nums.length;
    nums.sort((a, b) => a - b);
    //[1,2,3]
    function recur(temp, p) {
        // base condition
        if (p === n) {
            result.push([...temp])
            return;
        }

        // recursive step and process
        // two choices
        temp.push(nums[p]);
        recur(temp, p + 1);
        temp.pop();
        while (p < nums.length && nums[p] === nums[p + 1]) {
            p++
        }
        recur(temp, p + 1);
    }

    recur(temp, 0);
    return result;
};
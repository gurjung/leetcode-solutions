/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = [];
    let temp = [];
    let n = nums.length;
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
        recur(temp, p + 1);
    }

    recur(temp, 0);
    return result;
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {

    // approach -> swap based solution

    let result = [];
    let temp = [];
    let n = nums.length;

    function swap(arr, src, des) {
        let val = arr[src];
        arr[src] = arr[des];
        arr[des] = val;
    }
    // [1,2]
    function recur(temp, p) {
        // base case
        if (temp.length === n) {
            result.push([...temp]);
            return result;
        }
        // recursive step and process
        for (let i = p; i < n; i++) {
            temp.push(nums[i]);
            swap(nums, i, p);
            recur(temp, p + 1);
            temp.pop();
            swap(nums, i, p);
        }
    }

    recur(temp, 0);
    return result;
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let result = [];
    let temp = [];
    let n = nums.length;
    // [1,2,3]
    // [1,2,3], [1,2,3]

    function swap(arr, src, des) {
        let val = arr[src];
        arr[src] = arr[des];
        arr[des] = val;
    }

    function recur(p) {
        // base condition

        if (temp.length === n) {
            result.push([...temp]);
            return;
        }

        let newSet = new Set();

        //process and recursive steps
        for (let i = p; i < n; i++) {
            if (newSet.has(nums[i])) continue;

            newSet.add(nums[i]);
            temp.push(nums[i])
            swap(nums, i, p)
            recur(p + 1);
            temp.pop();
            swap(nums, i, p);
        }

    }

    recur(0)
    return result
};
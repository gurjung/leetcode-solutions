/**
 * @param {number[]} nums
 * @return {number}
 */
var numSquarefulPerms = function (nums) {
    let result = 0;
    let temp = [];
    let n = nums.length;

    function isPerfectSquare(first, second) {
        let val = first + second;
        let root = Math.sqrt(val);
        if (root !== Math.floor(root)) {
            return false
        }

        return true;
    }

    function swap(arr, src, des) {
        let x = arr[src];
        arr[src] = arr[des];
        arr[des] = x;
    }

    function recur(temp, p) {
        // base case
        if (p === n) {
            result++;
            return;
        }

        // recursive steps and process 
        let used = new Set();

        for (let i = p; i < n; i++) {

            // avoid duplicate permutations 
            if (used.has(nums[i])) {
                continue;
            }
            used.add(nums[i]);

            let lastElementInTemp = temp[temp.length - 1]

            if (temp.length > 0 && !isPerfectSquare(lastElementInTemp, nums[i])) {
                continue;
            }
            // store only if they are perfect square
            temp.push(nums[i]);
            swap(nums, i, p)
            recur(temp, p + 1);
            swap(nums, i, p);
            temp.pop();
        }


    }

    recur(temp, 0)
    return result
};
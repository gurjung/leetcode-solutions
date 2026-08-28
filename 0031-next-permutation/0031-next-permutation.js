/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    // 1. start from reverse loop because we want next greater not greatest
    let n = nums.length;
    let k = n - 2;

    function reverse(arr, start, end) {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }

    }
    
    while(k >= 0 && nums[k] >= nums[k+1]) {
        k--;
    }

    if (k === -1) return reverse(nums, k + 1, n - 1);

    // 2. run a loop in reverse order
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] > nums[k]) {
            // swap and break
            let temp = nums[k];
            nums[k] = nums[i];
            nums[i] = temp;
            break;
        }
    }

    return reverse(nums, k + 1, n - 1)

};
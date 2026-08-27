/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    // Approach 1 -> sort the array
    // [3,4,-1,1]
    // [-1,4,3,1]
    // [-1, 1, 3, 4]
    // [1, -1, 3, 4]
    // []

    let n = nums.length;
    // swap numbers
    function swap(arr, cuPos, coPos) {
        let temp = arr[cuPos];
        arr[cuPos] = arr[coPos];
        arr[coPos] = temp;
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] < 1 || nums[i] > n) continue;

        let correctPos = nums[i] - 1;
        let currentPos = i;
        if (correctPos !== currentPos && nums[correctPos] !== nums[currentPos]) {
            swap(nums, currentPos, correctPos);
            i--;
        }

    }

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return n + 1

};
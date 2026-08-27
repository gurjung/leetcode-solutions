/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    // // approach 1 -> linear search
    // let n = nums.length;

    // if (n < 2) {
    //     return 0;
    // }

    // // Check first element
    // if (nums[0] > nums[1]) {
    //     return 0;
    // }

    // for (let i = 1; i < n - 1; i++) {
    //     if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
    //         return i
    //     }
    // }

    // return n - 1;
    // [1,2,1,3,5,6,4]
    // l = 1, h = 6, m = 3, 

    // approach 2 -> binary search
    let n = nums.length;

    // if (n < 2) {
    //     return 0;
    // }

    let low = 0;
    let high = n - 1;
    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);
    
        if (nums[mid] < nums[mid + 1]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
};
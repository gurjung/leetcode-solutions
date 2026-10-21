/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // binary search
    let low = 0;
    let high = nums.length - 1;
    // nums = [3,4,5,1,2]
 
    while(low < high) {
        let mid = low + Math.floor((high - low) / 2);

        if(nums[mid] < nums[high]) {
            high = mid;
        } else {
            low = mid + 1;
        }

    }
    return nums[low]
};
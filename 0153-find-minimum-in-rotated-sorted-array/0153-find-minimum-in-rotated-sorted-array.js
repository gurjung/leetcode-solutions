/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    //low and high represents indexes
    let min = Infinity;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (nums[mid] <= nums[n - 1]) {
            min = mid;
            high = mid - 1; // make sure it is first occurence
        } else {
            low = mid + 1
        }
    }

    return nums[min]
};
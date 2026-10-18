/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    // prefix sum
    let prefixSumArr = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        prefixSumArr[i] = prefixSumArr[i - 1] + nums[i];
    }

    this.nums = prefixSumArr;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    if (left === 0) return this.nums[right];
    return this.nums[right] - this.nums[left - 1]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
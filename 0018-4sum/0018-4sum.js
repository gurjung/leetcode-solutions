/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    // [1,0,-1,0,-2,2]
    nums.sort((a, b) => a - b); // easy to remove duplicates
    // [-2,-1,0,0,1,2]
    // -3 + 1 + 2
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            // two pointer approach
            let k = j + 1;
            let l = nums.length - 1;

            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[k], nums[l]]);
                    k++;
                    l--;
                    while (k < l && nums[k] === nums[k - 1]) {
                        k++;
                    }

                    while (k < l && nums[l] === nums[l + 1]) {
                        l--;
                    }
                } else if (sum > target) {
                    l--;
                } else {
                    k++;
                }
            }
        }
    }
    return result
};
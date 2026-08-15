/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // Approach 1 -> with division

    let totalProduct = nums.reduce((acc, curr) => acc * curr, 1);
    let answer = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            let product = 1;
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    product = product * nums[j]
                }
            }
            answer.push(product)
        } else {
            let val = Math.floor(totalProduct / nums[i]);
            answer.push(val)
        }
    }

    return answer;
};
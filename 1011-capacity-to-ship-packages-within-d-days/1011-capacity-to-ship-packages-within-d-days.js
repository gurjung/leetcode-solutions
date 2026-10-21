/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    // binary search
    let low = Math.max(...weights);
    let high = weights.reduce((acc, curr) => acc + curr, 0); // worst case
    // [3,2,2,4,1,4], days = 3
    // l = 4, h = 7, m = 5
    // 
    function isPossible(x) {
        let currSum = 0;
        let count = 1;
        for (let i = 0; i < weights.length; i++) {
            currSum = currSum + weights[i];
            if (currSum > x) {
                count++;
                currSum = weights[i];
            }
        }

        if (count > days) return false;
        return true;
    }
    let ans = high;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let possible = isPossible(mid);
        if (possible) {
            ans = Math.min(ans, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans
};
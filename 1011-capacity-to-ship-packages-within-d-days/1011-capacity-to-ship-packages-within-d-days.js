/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    // approach -> Binary search

    let low = Math.max(...weights);
    let high = weights.reduce((acc, curr) => acc + curr, 0);
    let ans = high;

    // high = sum of all weights means if only 1 day is given then this will be ans

    function isValidWeight(capacity) {
        let currDays = 1;
        let currSum = 0;
        // 3
        for (let i = 0; i < weights.length; i++) {
            currSum = currSum + weights[i];

            if (currSum > capacity) {
                currDays++;
                currSum = weights[i];
            }

        }

        if (currDays <= days) {
            return true;
        } else {
            return false;
        }
    }

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (isValidWeight(mid)) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    }

    return ans;
};
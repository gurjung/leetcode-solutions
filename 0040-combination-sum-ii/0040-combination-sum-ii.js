/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let result = [];
    let temp = [];
    let n = candidates.length;
    candidates.sort((a, b) => a - b);
    // candidates = [10,1,2,7,6,1,5], target = 8
    // arr = [1,1,2,5,6,7,10] and target = 8

    function recur(remSum, temp, p) {
        // base conditions
        if (remSum === 0) {
            result.push([...temp]);
            return result;
        }

        // recursive step and process
        for (let i = p; i < n; i++) {
            if (remSum < candidates[i]) continue;
            if (i > p && candidates[i] === candidates[i - 1]) continue;

            temp.push(candidates[i]);
            recur(remSum - candidates[i], temp, i + 1);
            temp.pop();
        }
    }

    recur(target, temp, 0);
    return result;
};
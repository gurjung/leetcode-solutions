/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let result = [];
    let temp = [];
    candidates.sort((a, b) => a - b);
    let n = candidates.length;

    function recur(p, t) {
        // base condition
        if (t === 0) {
            result.push([...temp])
            return;
        }
        // [10,1,2,7,6,1,5]
        // [1,1,2,5,6,7,10]
        // process and recursive steps
        // two choices // take it or skip
        for (let i = p; i < n; i++) {
            if (t < candidates[i]) continue;

            if(i > p && candidates[i] === candidates[i - 1]) continue;

            temp.push(candidates[i])
            recur(i + 1, t - candidates[i]);

            temp.pop();
        }

    }

    recur(0, target)
    return result
};
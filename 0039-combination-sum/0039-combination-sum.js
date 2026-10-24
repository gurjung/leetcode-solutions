/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];
    let temp = [];

    function recur(p, t) {
        // base condition
        if (t < 0 || p >= candidates.length) {
            return;
        }
        if (t === 0) {
            result.push([...temp])
            return;
        }

        // process and recursive steps
        // two choices
        // take it
        temp.push(candidates[p])
        recur(p, t - candidates[p])
        // skip
        temp.pop();
        recur(p + 1, t)

    }

    recur(0, target)
    return result
};
/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {

    let totalSum = matchsticks.reduce((acc, curr) => acc + curr, 0);
    let isSquare = totalSum % 4 === 0;
    if (!isSquare) return false;

    let target = Math.floor(totalSum / 4);
    let sidesArr = [0, 0, 0, 0];
    let n = matchsticks.length;

    let result = false;

    function recur(p) {
        // base case
        if (p >= n) {
            result = true;
            return;
        }

        //recursive step and process
        for (let i = 0; i < 4; i++) {
            if ((matchsticks[p] + sidesArr[i]) > target) {
                continue;
            }
            sidesArr[i] = sidesArr[i] + matchsticks[p];
            recur(p + 1);
            sidesArr[i] = sidesArr[i] - matchsticks[p];
            if (result) return;
            if (sidesArr[i] === 0) break;

        }
    }

    recur(0);
    return result;
};
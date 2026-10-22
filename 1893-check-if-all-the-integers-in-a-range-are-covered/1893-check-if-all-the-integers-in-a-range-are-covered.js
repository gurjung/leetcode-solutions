/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
    // check for range of numbers between left and right
    // brute force
    for (let num = left; num <= right; num++) {
        let covered = false;

        for (let i = 0; i < ranges.length; i++) {
            let [x, y] = ranges[i];
            if (num >= x && num <= y) {
                covered = true;
                break;
            }
        }

        if (!covered) {
            return false;
        }
    }

    return true
};
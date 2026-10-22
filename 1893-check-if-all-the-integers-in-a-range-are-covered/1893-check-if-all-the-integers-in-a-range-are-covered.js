/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
    // check for range of numbers between left and right
    // brute force
    // for (let num = left; num <= right; num++) {
    //     let covered = false;

    //     for (let i = 0; i < ranges.length; i++) {
    //         let [x, y] = ranges[i];
    //         if (num >= x && num <= y) {
    //             covered = true;
    //             break;
    //         }
    //     }

    //     if (!covered) {
    //         return false;
    //     }
    // }

    // return true

    // another solution -> 
    // take an array and fill it with 1 where we have range values and otherwise 0
    // then compare with left to right 

    let arr = new Array(51).fill(0);

    for (let i = 0; i < ranges.length; i++) {
        let [x, y] = ranges[i];
        for (let j = x; j <= y; j++) {
            arr[j] = 1;
        }
    }

    for (let i = left; i <= right; i++) {
        if (arr[i] === 0) {
            return false;
        }
    }
    return true;
};
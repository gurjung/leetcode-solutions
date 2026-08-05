/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (arr, h) {
    // piles = [3,6,7,11], h = 8
    // 3 => 1 + 2 + 3 + 4 => 10 invalid
    // 4 => 1 + 2 + 2 + 3 => 8 valid // make sure if this is minimum count (right ans)
    // 5 => 1 + 2 + 2 + 3 => 8 valid // same as previous
    // 11 => 1 + 1 + 1 + 1 => 4 valid // but it is max and we want minimum

    let low = 0;
    let high = Math.max(...arr);
    let ans = high;

    // mid = 0 + 11 - 0 / 2 => 5
    function isValidGuess(noOfBananas) {

        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            let val = Math.ceil(arr[i] / noOfBananas);
            sum = sum + val;
        }

        if (sum > h) {
            return false;
        } else {
            return true;
        }
    }

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        const isValid = isValidGuess(mid);
        if (isValid) {
            ans = Math.min(ans, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
};
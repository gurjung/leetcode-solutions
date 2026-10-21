/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    // binary search
    let low = 0;
    let high = Math.max(...piles);

    // piles = [3,6,7,11], h = 8
    // m = 7
    function isPossible(x) {
        let count = 0;
        for (let i = 0; i < piles.length; i++) {
            count = count + Math.ceil(piles[i] / x);
        }

        if (count <= h) return true;
        return false;
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
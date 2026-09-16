/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {

    let ans = Infinity;

    if (bloomDay.length < (m * k)) return -1;

    let low = 0;
    let high = Math.max(...bloomDay);

    function isValid(day) {

        let count = 0;
        let bouquets = 0;
        for (let i = 0; i < bloomDay.length; i++) {

            if (bloomDay[i] <= day) {
                count++;
                if (count === k) {
                    bouquets++;
                    count = 0;
                }
            } else {
                count = 0;
            }
        }
        // console.log(bouquets, day, 'debug')
        if (bouquets >= m) {
            return true;
        } else {
            return false;
        }


    }

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let valid = isValid(mid);
        if (valid) {
            ans = Math.min(ans, mid);
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }

    return ans;
};
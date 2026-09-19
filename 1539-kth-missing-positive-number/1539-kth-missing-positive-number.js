/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    // brute force
    // let num = 1;

    // while (k > 0) {
    //     if (!arr.includes(num)) {
    //         k--;
    //     }

    //     if (k === 0) {
    //         return num;
    //     }

    //     num++;
    // }

    // approach 2 -> BS

    let low = 1;
    let high = arr.length + k;

    function countMissing(num) {
        let c = 0;
        for (let i = 1; i <= num; i++) {
            if (!arr.includes(i)) {
                c++;
            }
        }

        return c;
    }

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let count = countMissing(mid);
        if (count < k) {
            low = mid + 1;
        } else {
            ans = mid;
            high = mid - 1;
        }
    }

    return ans


};
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
    // brute force
    // let ans = new Array(n).fill(0);

    // for (let i = 0; i < bookings.length; i++) {
    //     let first = bookings[i][0];
    //     let last = bookings[i][1];
    //     let seats = bookings[i][2];

    //     for (let j = first - 1; j <= last - 1; j++) {
    //         ans[j] = ans[j] + seats;
    //     }
    // }

    // return ans;

    // optimise solution

    let ans = new Array(n).fill(0);

    for (let i = 0; i < bookings.length; i++) {
        let first = bookings[i][0];
        let last = bookings[i][1];
        let seats = bookings[i][2];
        ans[first - 1] = ans[first - 1] + seats;
        if (last < n) {
            ans[last] = ans[last] - seats;
        }
    }

    for (let i = 1; i < n; i++) {
        ans[i] = ans[i] + ans[i - 1]
    }

    return ans
};
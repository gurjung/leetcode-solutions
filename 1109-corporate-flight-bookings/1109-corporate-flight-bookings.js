/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {

    // [1,2,3,4,5]
    // [1,3,6,10,15] = prefix sum

    let results = new Array(n).fill(0);

    for (let i = 0; i < bookings.length; i++) {
        let first = bookings[i][0];
        let second = bookings[i][1];
        let seats = bookings[i][2];

        let j = first;
        while (j <= second) {
            results[j - 1] = results[j - 1] + seats;
            j++
        }
    }

    return results

};
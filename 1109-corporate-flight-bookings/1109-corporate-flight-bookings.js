/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {

    // [1,2,3,4,5]
    // [1,3,6,10,15] = prefix sum

    // // approach -> Brute-force

    // let results = new Array(n).fill(0);

    // for (let i = 0; i < bookings.length; i++) {
    //     let first = bookings[i][0];
    //     let last = bookings[i][1];
    //     let seats = bookings[i][2];

    //     let j = first;
    //     while (j <= last) {
    //         results[j - 1] = results[j - 1] + seats;
    //         j++
    //     }
    // }

    // return results


    // approach -> Prefix sum

    let results = new Array(n).fill(0);

    for (let i = 0; i < bookings.length; i++) {
        let first = bookings[i][0];
        let last = bookings[i][1];
        let seats = bookings[i][2];

        results[first - 1] = results[first - 1] + seats;
        
        if (last < n) {
            results[last] = results[last] - seats;
        }
    }

    for (let i = 1; i < n; i++) {
        results[i] = results[i] + results[i - 1]
    }

    return results

};
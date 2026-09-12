/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    // s = " -042"

    let newS = s.trim();
    let sign = "+"

    let res = 0
    for (let i = 0; i < newS.length; i++) {
        if (i === 0 && (newS[0] === "-" || newS[0] === "+")) {
            sign = newS[0];
            continue;
        }

        let digitValue = newS.charCodeAt(i) - 48; // 48 = "0"

        if (digitValue < 0 || digitValue > 9) {
            break;
        }

        // if (res.length === 0 && digit === "0") {
        //     continue;
        // }
        res = res * 10 + digitValue;
    }

    if (sign === "-") {
        res = -res
    }

    if(res < -2147483648) return -2147483648;

    if(res > 2147483647) return 2147483647;


    return res
};
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let remainder = 0;
    let res = "";
    while (columnNumber > 0) {
        // remainder
        // base 26
        columnNumber--;
        remainder = columnNumber % 26;
        let char = String.fromCharCode(65 + remainder);
        res = char + res;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return res;
};
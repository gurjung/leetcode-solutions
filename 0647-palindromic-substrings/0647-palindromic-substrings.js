/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    // Approach -> recursion
    let result = []

    function isPalindrome(str) {
        let low = 0;
        let high = str.length - 1;

        while (low <= high) {
            if (str[low] !== str[high]) {
                return false;
            }
            low++;
            high--;
        }
        return true;
    }

    function recur(start, end) {

        if(start === s.length) {
            return;
        }

        if(end === s.length) {
            recur(start + 1, start + 1);
            return;
        }

        let substring = s.slice(start, end + 1);
        if (isPalindrome(substring)) {
            result.push(substring);
        }
        recur(start, end + 1)

    }

    recur(0, 0)

    return result.length
};
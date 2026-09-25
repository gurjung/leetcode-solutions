/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let result = [];

    let temp = [];

    function isPalindrome(str) {
        let l = 0;
        let r = str.length - 1;

        while (l <= r) {
            if (str[l] !== str[r]) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }

    function recur(input, temp) {
        // base case

        if (input.length === 0) {
            result.push([...temp])
            return;
        }

        for (let i = 1; i <= input.length; i++) {
            let left = input.substring(0, i);
            if (!isPalindrome(left)) continue
            temp.push(left);
            recur(input.substring(i), temp)
            temp.pop();
        }

    }

    recur(s, temp)
    return result;
};
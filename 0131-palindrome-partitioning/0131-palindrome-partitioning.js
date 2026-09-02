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

    function recur(remS, temp) {
        // base case
        if (remS.length === 0) {
            result.push([...temp])
            return;
        }

        //recursive step and process
        for (let i = 1; i <= remS.length; i++) {
            let leftString = remS.substring(0, i);
            if (!isPalindrome(leftString)) {
                continue;
            }
            temp.push(leftString)
            recur(remS.substring(i), temp)
            temp.pop();
        }
    }

    recur(s, temp)
    return result
};
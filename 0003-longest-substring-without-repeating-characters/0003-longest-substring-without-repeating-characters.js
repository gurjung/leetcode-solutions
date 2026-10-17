/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // "pwwkew"

    let l = 0;
    let r = 0;
    let n = s.length;
    let newSet = new Set();
    let ans = 0;
    // set = {}
    while (r < n) {

        while (newSet.has(s[r])) {
            newSet.delete(s[l]);
            l++;
        }
        newSet.add(s[r]);
        let len = r - l + 1;
        ans = Math.max(ans, len);
        r++
    }

    return ans

};
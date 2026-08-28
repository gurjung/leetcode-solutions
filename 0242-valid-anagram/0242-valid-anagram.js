/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // approach -> frequency counter
    if (s.length !== t.length) return false;

    let map = {};


    // calculating freq of string s
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map[char]) {
            map[char] = map[char] + 1;
        } else {
            map[char] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if (map[char]) {
            map[char] = map[char] - 1
        } else {
            return false
        }
    }

    return true;
};
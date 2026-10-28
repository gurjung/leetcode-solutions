/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    // greedy approach

    // take map to store last occurence of each character
    let map = {}
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = i;
    }

    // map = {a: 8, b: 3}

    let start = 0;
    let end = 0;

    // width = end - start + 1
    let ans = [];
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        end = Math.max(end, map[ch]);
        if (i === end) {
            let width = end - start + 1;
            ans.push(width);
            start = i + 1
        }
    }
    return ans;


};
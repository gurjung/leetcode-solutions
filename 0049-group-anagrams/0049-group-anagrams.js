/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // approach 1 -> sort the individual strings 
    let map = {};

    // {"aet" : ['eat', 'tea', 'ate']}

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let sortedStr = [...strs[i]].sort().join("");

        if (map[sortedStr]) {
            let val = map[sortedStr];
            val.push(str);
            map[sortedStr] = val
        } else {
            map[sortedStr] = [str];
        }
    }

    return [...Object.values(map)]

};
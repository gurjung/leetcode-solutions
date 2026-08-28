/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // approach 1 -> sort the individual strings 
    // let map = {};

    // // {"aet" : ['eat', 'tea', 'ate']}

    // for (let i = 0; i < strs.length; i++) {
    //     let str = strs[i];
    //     let sortedStr = [...strs[i]].sort().join("");

    //     if (map[sortedStr]) {
    //         let val = map[sortedStr];
    //         val.push(str);
    //         map[sortedStr] = val
    //     } else {
    //         map[sortedStr] = [str];
    //     }
    // }

    // return [...Object.values(map)]

    // approach 2 -> frequency categorization 
    let map = {};

    // {"a1e1t1" : ['eat', 'tea', 'ate']}
    function calcFreq(x) {
        // "eat"
        let map = {};
        for (let k = 0; k < x.length; k++) {
            let char = x[k]
            if (map[char]) {
                map[char] = map[char] + 1
            } else {
                map[char] = 1
            }
        }
        // input =  {e: 1, a: 1, t: 1}
        // output = "a1e1t1"
        let result = Object.keys(map).sort().map(key => `${key}${map[key]}`).join("");
        // 1. Object.keys(map) = ["e", "a", "t"]
        // 2. Object.keys(map).sort() = ["a", "e", "t"]
        // 3. Object.keys(map).sort().map(key => `${key}${map[key]}`) = ["a1", "e1", "t1"]
        // 4. Object.keys(map).sort().map(key => `${key}${map[key]}`).join("") = "a1e1t1"
        return result;
    }

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let newStr = calcFreq(str)


        if (map[newStr]) {
            let val = map[newStr];
            val.push(str);
            map[newStr] = val
        } else {
            map[newStr] = [str];
        }
    }

    return [...Object.values(map)]

};
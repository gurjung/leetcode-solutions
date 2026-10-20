/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    // {a1e1t1: [eat, tea]}

    function calcFreq(x) {
        // "eat"
        let freq = {}
        for (let i = 0; i < x.length; i++) {
            let ch = x[i];
            if (freq[ch]) {
                freq[ch] = freq[ch] + 1
            } else {
                freq[ch] = 1
            }
        }
        // {a: 1, e: 1, t: 1}

        let keysArr = [];

        for (let k in freq) {
            keysArr.push(k)
        }
        // keysArr = [a,e,t]

        let sortedKeys = keysArr.sort()
        let sortedFreq = {};
        for (let i = 0; i < sortedKeys.length; i++) {
            let ch = sortedKeys[i];
            sortedFreq[ch] = freq[ch]
        }
        let ans = ""
        for (let k in sortedFreq) {
            let v = sortedFreq[k];
            ans = ans + k + v
        }
        return ans
    }

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let freqS = calcFreq(str);
        if (map.has(freqS)) {
            let val = map.get(freqS);
            val.push(str);
            map.set(freqS, val)
        } else {
            map.set(freqS, [str])
        }
    }

    let result = [];

    for (const [key, value] of map) {
        result.push(value)
    }
    return result;
};
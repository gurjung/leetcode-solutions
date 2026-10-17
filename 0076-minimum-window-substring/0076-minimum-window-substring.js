/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let ans = +Infinity;
    let start = 0;

    let l = 0;
    let r = 0;
    let n = s.length;

    // calc freq of t string
    let mapT = {};
    let k = t.length;

    for (let i = 0; i < t.length; i++) {
        let ch = t[i]
        if (mapT[ch]) {
            mapT[ch] = mapT[ch] + 1
        } else {
            mapT[ch] = 1;
        }
    }

    // mapT = {A : 1, B : 1, C: 1}

    while (r < n) {

        let char = s[r];
        if (mapT[char] !== undefined) {
            if (mapT[char] > 0) {
                k--;
            }
            mapT[char] = mapT[char] - 1;
        }


        while (k === 0) {
            let currLen = r - l + 1;

            if (currLen < ans) {
                ans = currLen;
                start = l
            }

            let leftCh = s[l];

            if (mapT[leftCh] !== undefined) {

                mapT[leftCh] = mapT[leftCh] + 1;

                if (mapT[leftCh] > 0) {
                    k++;
                }
            }

            l++;
        }
        r++;
    }
    return ans === Infinity ? "" : s.substring(start, start + ans);
};
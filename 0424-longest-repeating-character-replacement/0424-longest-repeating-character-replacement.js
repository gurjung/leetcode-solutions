/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let left = 0;
    let right = 0;

    // s = "AABABBA", k = 1
    // {A: 2, B: 1}, k = 0

    let freqMap = new Map();
    let maxFreq = 0;
    let maxLength = 0;

    while (right < s.length) {
        // calc freq 
        let ch = s[right];

        if (freqMap.has(ch)) {
            let val = freqMap.get(ch);
            freqMap.set(ch, val + 1)
        } else {
            freqMap.set(ch, 1)
        }

        maxFreq = Math.max(maxFreq, freqMap.get(ch));
        // window = "AABAB"
        // maxFreq = 3
        // diff = 2
        // k = 1
        // check for invalid window
        while ((right - left + 1) - maxFreq > k) {
            // shrink the window and make it valid
            let val = freqMap.get(s[left]);
            freqMap.set(s[left], val - 1);
            left++;
        }
        // calc maxLength seen so far after ensuring window is valid
        let newWindow = right - left + 1;
        maxLength = Math.max(maxLength, newWindow);
        right++;
    }

    return maxLength;

};
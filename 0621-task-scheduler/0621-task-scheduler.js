/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    // Approach 1 -> 
    
    let freqArr = new Array(26).fill(0)
    let maxFreq = 0;
    for (let i = 0; i < tasks.length; i++) {
        let curr = tasks[i].charCodeAt() - 65;
        freqArr[curr]++;
        maxFreq = Math.max(freqArr[curr], maxFreq)
    }

    let countOfMaxFreqChars = 0;

    for (let i = 0; i < 26; i++) {
        if (freqArr[i] === maxFreq) {
            countOfMaxFreqChars++;
        }
    }

    let cycles = ((n + 1) * (maxFreq - 1)) + countOfMaxFreqChars;

    return Math.max(cycles, tasks.length)
};
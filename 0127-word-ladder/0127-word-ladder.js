/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    // approach BFS

    let wordSet = new Set(wordList);

    if (!wordSet.has(endWord)) {
        return 0;
    }

    let q = [];

    q.push({ begin: beginWord, val: 1 });

    while (q.length) {
        let curr = q.shift();
        let str = curr.begin;
        let val = curr.val;
        if (str === endWord) {
            return val;
        }
        for (let i = 0; i < str.length; i++) {
            // explore all single characters
            let char = str.split("");

            for (let c = 97; c <= 122; c++) {
                let nextChar = String.fromCharCode(c);

                if (char[i] === nextChar) continue;

                char[i] = nextChar;

                let nextWord = char.join("");
                if (wordSet.has(nextWord)) {
                    q.push({ begin: nextWord, val: val + 1 });
                    wordSet.delete(nextWord)
                }
            }

        }
    }

    return 0;
};
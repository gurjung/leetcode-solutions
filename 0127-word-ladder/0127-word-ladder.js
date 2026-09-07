/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {

    let wordSet = new Set(wordList);

    if (!wordSet.has(endWord)) {
        return 0;
    }

    let q = [];

    q.push({ begin: beginWord, val: 1 })

    while (q.length) {
        let curr = q.shift();
        let { begin, val } = curr;

        if (begin === endWord) {
            return val;
        }

        for (let i = 0; i < begin.length; i++) {

            let charArr = begin.split("");

            for (let j = 97; j <= 122; j++) {
                let newChar = String.fromCharCode(j);

                if (newChar === charArr[i]) {
                    continue;
                }

                charArr[i] = newChar;
                let newWord = charArr.join("");

                if (wordSet.has(newWord)) {
                    q.push({ begin: newWord, val: val + 1 });
                    wordSet.delete(newWord)
                }
            }
        }

    }

    return 0;


};
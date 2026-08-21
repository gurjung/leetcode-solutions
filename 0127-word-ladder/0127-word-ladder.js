/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    // "hit"
    // ["h", "i", "t"]
    // Approach -> shortest path + unweighted edges -> BFS

    let q = [];
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    q.push({ begin: beginWord, val: 1 });

    while (q.length) {
        let { begin, val } = q.shift();

        if (begin === endWord) return val;


        // ["h", "i", "t"]
        for (let i = 0; i < begin.length; i++) {
            
            let charArr = begin.split('');
            
            for (let c = 97; c <= 122; c++) {
                // 25 possibilities for each char
                let ch = String.fromCharCode(c);

                if (charArr[i] === ch) continue;

                charArr[i] = ch;

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
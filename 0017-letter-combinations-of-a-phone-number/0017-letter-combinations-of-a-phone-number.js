/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    }

    let result = [];
    let temp = [];
    // digits = "23"
    // temp = ["b", ]
    function recur(temp, p) {
        // base condition

        if (p === digits.length) {
            let str = temp.join("");
            result.push(str)
            return;
        }

        // recursive step and process

        let char = digits[p];
        
        let arr = map[char];

        for (let char of arr) {
            temp.push(char)
            recur(temp, p + 1);
            temp.pop();
        }

    }

    recur(temp, 0);

    return result

};
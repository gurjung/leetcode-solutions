/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
    // allowed operators = +, *, -
    let result = [];
    let temp = "";
    // let numCpy = num.split("");
    // temp = ""
    function recur(temp, finalVal, p, prevVal) {
        // base case
        if (p === num.length) {
            if (finalVal === target) {
                result.push(temp);
            }
            return;
        }

        // three choices
        for (let i = p; i < num.length; i++) {

            // to check initial zero    
            if (i > p && num[p] === "0") {
                break;
            }

            let str = num.slice(p, i + 1);
            let currNum = Number(str);

            if (p === 0) {
                recur(str, currNum, i + 1, currNum);
                continue;
            }

            // p > 0

            // + case
            recur(temp + "+" + str, finalVal + currNum, i + 1, currNum);

            // - case
            recur(temp + "-" + str, finalVal - currNum, i + 1, -currNum);

            // * case
            // 1 + 2 * 3 => 1 + (2 * 3) => 2 is prevVal 
            // and 1 can be written as finalVal - prevVal => 3 - 2 = 1
            recur(temp + "*" + str, (finalVal - prevVal) + (prevVal * currNum), i + 1, prevVal * currNum);
        }

    }

    recur(temp, 0, 0, 0);
    return result
};
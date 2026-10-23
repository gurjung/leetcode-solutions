/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let number = 0;
    let result = 0;
    let sign = 1; // 1 for + and -1 for -
    let stack = [];

    function isNumber(x) {
        return x >= "0" && x <= "9"
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") continue;

        if (isNumber(s[i])) {
            // if any valid number
            // create number
            number = (number * 10) + Number(s[i])
        } else if (s[i] === "+") {
            // number already formed and now store in result
            result = result + (number * sign);
            // reset number and sign after updating result
            number = 0;
            sign = 1;
        } else if (s[i] === "-") {
            // number already formed and now store in result
            result = result + (number * sign);
            // reset number and sign after updating result
            number = 0;
            sign = -1;
        } else if (s[i] === "(") {
            // reset sign, number and result after pushing current result 
            stack.push(result);
            stack.push(sign);
            result = 0;
            number = 0;
            sign = 1;
        } else {
            // ")"
            // create current result
            result = result + (number * sign)
            number = 0;
            // stack = [2, 1]
            // 2 + (3+1)
            let prev_sign = stack.pop();
            let prev_res = stack.pop();
            result = result * prev_sign;
            result = result + prev_res;
        }
    }

    result = result + (number * sign);
    return result;
};
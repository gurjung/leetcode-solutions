/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
    let result = [];
    let temp = [];
    // [0,1, 0]
    function recur(temp) {
        // base condition
        if (temp.length === n) {
            let str = temp.join("");
            result.push(str);
            return;
        }

        // add 1 
        temp.push(1);
        recur(temp)
        temp.pop();

        // add 0
        if (temp.length === 0 || temp[temp.length - 1] !== 0) {
            temp.push(0);
            recur(temp)
            temp.pop();
        }

    }

    recur(temp);

    return result;

}

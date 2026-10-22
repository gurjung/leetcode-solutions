/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let stack = [];
    let newPath = path.split("/");

    for (let i = 0; i < newPath.length; i++) {
        let ch = newPath[i];
        if (ch === "" || ch === ".") {
            continue;
        }
        if (ch === "..") {
            stack.pop();
        } else {
            stack.push(ch);
        }

    }
    let arr = [];
    while (stack.length) {
        let val = stack.pop();
        arr.push(val);
    }
    if (!arr.length) return "/";

    let revArr = arr.reverse();
    let result = "";
    for (let i = 0; i < revArr.length; i++) {
        result = result + "/";
        result = result + revArr[i]
    }
    return result
};
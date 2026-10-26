/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {

    // Addition -> Result(XOR) , Carry(AND)

    // 0 + 0 -> 0 , 0
    // 0 + 1 -> 1 , 0
    // 1 + 0 -> 1 , 0
    // 1 + 1 -> 0 , 1

    while (b !== 0) {
        let sum = a ^ b;
        let carry = (a & b) << 1;

        a = sum;
        b = carry;
    }

    return a;

};
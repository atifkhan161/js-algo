/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + 1;
        if (sum > 9) {
            digits[i] = sum % 10;
        } else {
            digits[i] = sum;
            carry = 0;
            return digits;
        }
    }
    if (carry > 0) {
        digits = [1, ...digits];
    }
    return digits;
};
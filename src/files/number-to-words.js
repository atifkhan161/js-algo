/**
 * @param {number} num
 * @return {string}
 */
let tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
let twenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
let thousands = ["", " Thousand ", " Million ", " Billion "];
var numberToWords = function (num) {
    if (num === 0 || num === "") {
        return "Zero";
    }
    let i = 0;
    let result = "";
    while (num != 0) {
        let modVal = num % 1000;
        result = helper(modVal).trim() + (modVal > 0 ? thousands[i] : "") + result;
        num = Math.trunc(num / 1000);
        i++;
    }
    return result.trim();
};

function helper(n) {
    if (n === 0 || n === "") {
        return "";
    } else if (n < 20) {
        return twenty[n];
    } else if (n < 100) {
        return tens[Math.trunc(n / 10)] + " " + helper(n % 10);
    } else {
        return twenty[Math.trunc(n / 100)] + " Hundred " + helper(n % 100);
    }
};

// O (Log N)
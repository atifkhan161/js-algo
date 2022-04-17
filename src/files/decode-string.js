/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    // num stack
    let numStack = [];
    // string stack
    let sb = "";
    let strStack = [];
    let len = s.length;
    for (let i = 0; i < len; i++) {
        let char = s[i];
        if (char == "[") {
            strStack.push(sb);
            sb = "";
        } else if (char == "]") {
            let rep = numStack.pop();
            let temp = strStack.pop();
            for (let i = 0; i < rep; i++) {
                temp += sb;
            }
            sb = temp;
        } else if (!isNaN(char)) {// is digit
            let num = char * 1;
            while ((i + 1) < len && !isNaN(s[i + 1])) {
                num = (num * 10) + (s[i + 1] * 1);
                i++;
            }
            numStack.push(num);
        } else {// is string
            sb += char;
        }
    }
    return sb;
};

// 3[a]2[bc]
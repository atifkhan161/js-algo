/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
    let result = "";
    let i = s.length - 1;
    let j = s.length - 1;
    while (i >= 0) {
        if (s[i] === " ") {
            i--;
        } else {
            j = i;
            while (i >= 0 && s[i] != " ") {
                i--;
            }
            if (result.length) {
                result += " ";
            }
            result += s.substring(((i == 0 && s[i] != ' ') ? i : i + 1), j + 1);
        }
    }
    return result;
};

// "the sky is blue"
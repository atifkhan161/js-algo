/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    if (s.length < 10) return [];
    let dnaSeqSet = new Set();
    let result = new Set();
    for (let i = 0; i < s.length - 9; i++) {
        let seq = s.substring(i, (i + 10));
        if (dnaSeqSet.has(seq)) {
            result.add(seq);
        } else {
            dnaSeqSet.add(seq);
        }
    }
    return [...result];
};
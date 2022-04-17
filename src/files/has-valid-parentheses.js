/**
 * @param {string} s
 * @return {boolean}
 */
function hasValidParentheses(s) {
    // create a hashMap to store the valid match   
    const bracketsMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    // create a stack data structure with array
    let stack = [];
    for (let char of s) {
        if(bracketsMap[char]) {
            stack.push(char);
        } else if (stack.length && bracketsMap[stack[stack.length -1]] === char) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
};

// Stacks --> Last in first out using array push and pop
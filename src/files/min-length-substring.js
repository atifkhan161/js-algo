// function minLengthSubstring(s, t) {
//   // Write your code here
//   const subStrSet = new Set();
//   let ptr1;
//   let ptr2;
//   for (let char of t) {
//     subStrSet.add(char);
//   }
//   for (let i = 0; ((i < s.length) && (subStrSet.size > 0)); i++) {
//     if (subStrSet.has(s[i])) {
//       if (ptr1 == null) {
//         ptr1 = i;
//       } else {
//         ptr2 = i;
//       }
//       subStrSet.delete(s[i]);
//     }
//   }
//   return (!ptr1 && !ptr2) ? -1 : ((ptr2 - ptr1) + 1);
// }

// dcbefebce fd => 5
// cdbefebce fd => 4
// 1, 5

function minLengthSubstring(s, t) {

  const tMap = new Map();
  const window = new Map();

  for (const char of t) {
    tMap.set(char, 1 + (tMap.get(char) || 0));
  }

  let have = 0;
  let need = tMap.size;
  let left = 0;
  let right = 0;
  let minWindow = '';

  for (right; right < s.length; right++) {
    const char = s[right]

    // Add char to window if char exists in tMap
    if (tMap.has(char)) {
      window.set(char, 1 + (window.get(char) || 0));
    }

    // Increment the have counter if we have the required number of characters in our window
    if (window.has(char) && tMap.get(char) === window.get(char)) {
      have++;
    }

    while (have === need) {
      // If our current window is smaller than the current smallest window, update our minWindow
      if (!minWindow || (right - left + 1) < minWindow.length) {
        minWindow = s.slice(left, right + 1)
      }

      // If the letter we're about to remove causes us to no longer statisfy the count requirement, decrement have counter
      if (tMap.get(s[left]) > (window.get(s[left]) - 1)) {
        have--;
      }

      // Decrement or delete left character from our window
      window.get(s[left]) > 1 ? window.set(s[left], window.get(s[left]) - 1) : window.delete(s[left]);

      // Move up the left pointer
      left++;
    }
  }

  return minWindow.length === 0 ? -1 : minWindow.length;
}

// cdbefedbce fd => 4
// 
// ADOBECODEBANC ABC
// [0,3,5,9,10,11]
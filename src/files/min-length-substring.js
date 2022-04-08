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

  let minLen = Number.MAX_VALUE;
  let charCount = t.length;
  let minStartIndex = 0;
  const charMap = new Map();
  for (let char of t) {
    charMap.set(char, ((charMap.get(char) || 0) + 1));
  }
  for (let l = 0, r = 0; r < s.length;) {
    let charVal = charMap.get(s[r]);
    if (charVal) {
      charCount--;
    }
    charMap.set(s[r], charVal--);
    r++;

    while (charCount === 0) {
      if ((r - l) < minLen) {
        minLen = r - l;
        minStartIndex = l;
      }

      lVal = charMap.get(s[l]);
      if (lVal) {
        charMap.set(s[l], lVal++);
        charCount++;
        l++;
      }
    }
  }
  return minLen === Number.MAX_VALUE ? -1 : (minLen + 1);
}

// cdbefebce fd => 4
// {
//   "d": 1,
//   "f": 1
// }
//
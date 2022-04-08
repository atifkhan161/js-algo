// Naive approach
// function matchingPairs(s, t) {
//   // Write your code here
//   let output = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = (i + 1); j < s.length; j++) {
//       let swapStr = swap(s, i, j);
//       let count = matchingPair(swapStr, t);
//       output = Math.max(output, count);
//     }
//     if (output === s.length) {
//       break;
//     }
//   }
//   return output;
// }

// function swap(str, first, last) {
//   let arr = str.split('');    //to array
//   var temp = arr[first];
//   arr[first] = arr[last];
//   arr[last] = temp;
//   arr = arr.join("").toString(); //to string
//   return arr;
// }

function matchingPair(str1, str2) {
  let count = 0;
  for (i = 0; i < str1.length; i++) {
    if (str1[i] == str2[i]) {
      count++;
    }
  }
  return count;
}

// "abcd", "adcb"

function matchingPairs(s, t) {
  if (s == null || t == null || s.length != t.length) {
    return 0;
  }
  const len = s.length;
  const mismatches = new Set();
  const unmatchedS = new Set();
  const unmatchedT = new Set();
  let count = matchingPair(s, t);
  for (let i = 0; i < s.length; i++) {
    if (s[i] != t[i]) {
      if (mismatches.has(s[i]) && mismatches.has(t[i])) {
        // increase by 2 -> this only happens when a swap creates 2 matching
        // pairs, e.g. s=acdb, t=bcda -> output = 4
        return count + 2;
      }
      unmatchedS.add(s[i]);
      unmatchedT.add(t[i]);
      mismatches.add(s[i]);
      mismatches.add(t[i]);
    }
  }

  for (let char of unmatchedS) {
    if (unmatchedT.has(char)) {
      // increase by 1 -> a match can be created by making a swap,
      // e.g. s=abff, t=faff -> output = 3
      return count + 1;
    }
  }
  if (mismatches.length > 1 || hasDuplicates(s) || hasDuplicates(t)) {
    // stay de same -> we can swap a duplicated character or two mismatches,
    // e.g. s=aabb, t=ffbb -> output = 2
    return count;
  }
  if (mismatches.length == 1) {
    // decrease by 1 -> there's only one mismatch and all the other match,
    // e.g. s=abc, t=fbc -> output = 1
    return count - 1;
  }
  // decrease by 2 -> all characters match, e.g. s=ab, t=ab -> output = 0
  return count - 2;
}

function hasDuplicates(str) {
  return str.length != (new Set(str)).length;
}

// "abcd", "adcb"
// increase by 2 -> this only happens when a swap creates 2 matching pairs, e.g. s=acdb, t=bcda -> output = 4
// increase by 1 -> a match can be created by making a swap, e.g. s=abff, t=faff -> output = 3
// stay de same -> we can swap a duplicated character or two mismatches, e.g. s=aabb, t=ffbb -> output = 2
// decrease by 1 -> there's only one mismatch and all the other match, e.g. s=abc, t=fbc -> output = 1
// decrease by 2 -> all characters match, e.g. s=ab, t=ab -> output = 0

// mismatches: 
// [b, d] [d, b]
function findSignatureCounts(arr) {
  // Write your code here
  let count = 0;
  let output = [];
  for (let idx = 0; idx < arr.length; idx++) {
    count = 0;
    count++;// (since they can sign their own yearbook)
    if (!isSelf(idx, arr)) {
      // For each student check if at that index some other student
      // is present then increment count.
      count++;
    }
    output.push(count);
  }

  return output;
}

function isSelf(idx, arr) {
  return idx === arr[idx] - 1;
}

// [2,1]
// pass 1
// s1 will sign own book and pass to arr[0]=> 2 i.e student 2
// s2 will sign own book and pass to arr[1]=> 1 i.e student 1
// pass 2
// s1 will sign 2(student 2) book and pass to arr[0]=> 2 i.e student 2
// s2 will sign 1(student 1)  book and pass to arr[1]=> 1 i.e student 1

// Iterate over students array. For each student increment the count (since they can sign their own yearbook)
// For each student check if at that index some other student is present then increment count.
// Return output array.
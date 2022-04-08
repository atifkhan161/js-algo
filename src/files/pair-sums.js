function pairSums(arr, k) {

  // const map = new Map();
  // let result = 0;
  // map.set((k - arr[0]), 1);// or true
  // for (i = 1; i < arr.length; i++) {
  //   if (map.get(arr[i])) {
  //     result++;
  //   } else {
  //     map.set(k - arr[i], 1);// or true
  //   }
  // }
  // return result;

  const map = new Map();
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    const sumVal = arr[i];
    let curVal = map.get(sumVal);
    if (curVal) {
      curVal++;
      map.set(sumVal, curVal);// or true
    } else {
      map.set(sumVal, 1);// or true
    }
  }
  for (i = 0; i < arr.length; i++) {
    let curVal = map.get(arr[i]);
    if (curVal && arr[i] === (k - arr[i])) {
      result += calculate_nCr(curVal, 2);//r=2
      map.set(arr[i], 0);
    } else {
      if (curVal) {
        curVal--;
        map.set(arr[i], curVal);
      }
      let sumVal = map.get(k - arr[i]);
      if (sumVal) {
        result++;
        sumVal--;
        map.set(k - arr[i], sumVal);
      }
    }
  }
  return result;
}

// Function to calculate the factorial of a number
function factorial(num) {
    if (num<=1) {
        return 1;
    }
    return num*factorial(num-1);
}
// Function to calculate the value of nCr
function calculate_nCr(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

// [1, 2, 3, 4, 3] 6
// {
//   1: 1, 
//   2: 1, 
//   3: 2,
//   4: 1
// }

// [1, 5, 3, 3, 3] 6
// {
//   1: 1, 
//   3: 3, 
//   5: 1
// }
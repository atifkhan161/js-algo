function countSubarrays(arr) {
  // Write your code here
  // const map = new Map();
  // arr.forEach(element => {
  //   map.set(element, 1);
  // });
  let res = [];
  for (i = 0; i < arr.length; i++) {
    let maxSubArrays = 1;
    let curVal = arr[i];
    //Check left until value is less
    let leftCounter = 1;
    while (true) {
      let leftVal = arr[i - leftCounter];
      if (leftVal && leftVal < curVal) {
        leftCounter++;
        maxSubArrays++;
      } else {
        break;
      }
    }
    //Check right until value is less
    let rightCounter = 1;
    while (true) {
      let rightVal = arr[i + rightCounter];
      if (rightVal && rightVal < curVal) {
        rightCounter++;
        maxSubArrays++;
      } else {
        break;
      }
    }
    res[i] = maxSubArrays;
  }
  return res;
}

//[3, 4, 1, 6, 2] 
// 3 => [3]
// 4 => [4], [3,4] ,[4,1]
// 1 => [1]
// 6 => [6], [6,2], [1,6], [4,1,6], [3,4,1,6]
// 2 => [2]
// output => [1,3,1,5,1]
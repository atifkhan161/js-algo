function areTheyEqual(array_a, array_b) {
  // Write your code here
  if (array_a.length !== array_b.length) return false;
  const map1 = createMap(array_a);
  const map2 = createMap(array_b);

  for (var [key, val] of map1) {
    testVal = map2.get(key);
    // in cases of an undefined value, make sure the key
    // actually exists on the object so there are no false positives
    if (testVal !== val || (testVal === undefined && !map2.has(key))) {
      return false;
    }
  }
  return true;
}

function createMap(arr) {
  const map = new Map();
  for (i = 0; i < arr.length; i++) {
    let result = map.get(arr[i]);
    if (result) {
      result++;
      map.set(arr[i], result);
    } else {
      map.set(arr[i], 1);
    }
  }
  return map;
}

function checkEquals(ar1, arr2) {
  return JSON.stringify(ar1) === JSON.stringify(arr2);
}

// [1, 2, 3, 4] [1, 4, 3, 2]
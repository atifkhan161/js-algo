function rotationalCipher(input, rotationFactor) {
  // Write your code here
  const rf = Number(rotationFactor);
  const loweCaseStart = 'a'.charCodeAt();//97
  const UpperCaseStart = 'A'.charCodeAt();//65
  const digitStart = '0'.charCodeAt();//48
  let res = "";
  for (let char of input) {
    charCode = char.charCodeAt();
    if (charCode >= loweCaseStart && charCode <= (loweCaseStart + 25)) {
      res += String.fromCharCode((charCode + rf - loweCaseStart) % 26 + loweCaseStart);
    } else if (charCode >= UpperCaseStart && charCode <= (UpperCaseStart + 25)) {
      res += String.fromCharCode((charCode + rf - UpperCaseStart) % 26 + UpperCaseStart);
    } else if (charCode >= digitStart && charCode <= (digitStart + 9)) {
      res += String.fromCharCode((charCode + rf - digitStart) % 10 + digitStart);
    } else {
      res += char;
    }
  }
  return res;
}
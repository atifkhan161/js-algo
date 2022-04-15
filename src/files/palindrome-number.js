function isPalindromeNumber(n) {
    if (n < 0 || (n % 10 == 0) && n != 0) {
        return false;
    }
    let reversedNum = 0;
    while (n > reversedNum) {
        let pop = n % 10;
        reversedNum = (reversedNum * 10) + pop;
        n = Math.trunc(n / 10);
    }
    return n == reversedNum || n == Math.trunc(reversedNum / 10);
}
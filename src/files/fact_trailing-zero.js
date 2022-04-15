function trailingZeroes(n) {
    let count = 0;
    while (Math.trunc(n) > 0) {
        n /= 5;
        count += Math.trunc(n);
    }
    return count;
}
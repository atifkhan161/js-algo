/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
    let ans = 1.0;
    let num = n;
    // If n is negative
    if (n < 0) {
        num = -1 * num;
        // Tke absolute value
    }
    while (num > 0) {
        // If n is divisible by 2
        if (num % 2 == 0) {
            x = x * x;
            num = num / 2;
        } else {
            ans = ans * x;
            num = num - 1;
        }
    }
    if (n < 0) {
        return 1 / ans;
    }
    return ans;
};

// Ex. myPow(2, 14)
// n % 2 (14) => x = 2 * 2 = 4; n = 7;
// 7 => ans = 1 * 4 = 4; n = 6;
// 6 => x = 4 * 4 = 16; n = 3;
// 3 => ans = 4 * 16 = 64; n = 2;
// 2 => x = 16 * 16 = 256; n = 1;
// 1 => ans = 64 * 256 = 16384; n = 0;

// Time complexity log2(n)
// 2^14 = (2^2)7 = 4^7 = 16383
// 4^7 = 4 * 4^6; 4 * 4096;
// 4^6 = (4^2)^3 = 16^3
// 16^3 = 16 * 16^2; 16 * 256 = 4096;
// 16^2 = (16^2)^1;
// 
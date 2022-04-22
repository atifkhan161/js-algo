/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function (nums) {
    if (nums.length === 1) return true;
    let reachable = nums[0];
    for (let i = 0; (i < nums.length) && i<= reachable; i++) {
        reachable = Math.max((nums[i] + i), reachable);
        if (reachable >= (nums.length-1)) {
            return true;
        }
    }
    return false;
};

// O(n)
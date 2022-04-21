/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let sumMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (sumMap.has(diff)) {
            return [sumMap.get(diff), i];
        } else {
            sumMap.set(nums[i], i);
        }
    }
};

// O(n)
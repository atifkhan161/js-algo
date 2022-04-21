/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let mid = 0;
    let low = 0;
    let high = nums.length - 1;
    while(mid <= high) {
        if (nums[mid] === 0) {
            let temp = nums[mid];
            nums[mid] = nums[low];
            nums[low] = temp;
            mid++;
            low++;
        } else if(nums[mid] === 1) {
            mid++;
        } else if(nums[mid] === 2) {
            let temp = nums[mid];
            nums[mid] = nums[high];
            nums[high] = temp;
            high--;
        }
    }
    return nums;
};

// [2,0,2,1,1,0]

// [0,0,2,1,1,2]
// [0,0,1,1,2,2]


//  O(n)
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var mergeSortedArray = function (nums1, m, nums2, n) {
    if (nums1.length === n) return nums2;
    let p1 = m - 1;
    let p2 = n - 1;
    for (let i = nums1.length - 1; i > 0; i--) {
        let e1 = p1 >=0 ? nums1[p1]: 0;
        let e2 = p2 >=0 ? nums2[p2]: 0;
        if (e1 > e2) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
    return nums1;
}

// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// O(n)
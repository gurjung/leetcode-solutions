/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // let m = nums1.length;
    // let n = nums2.length;

    // let mergedArr = [...nums1, ...nums2];
    // mergedArr.sort((a, b) => a - b);

    // let low = 0;
    // let high = mergedArr.length - 1;
    // let isEven = mergedArr.length % 2 === 0
    // let ans = 0;
    // console.log(mergedArr, 'debug')
    // while (low <= high) {
    //     let mid = low + Math.floor((high - low) / 2);
    //     if (!isEven) {
    //         ans = mergedArr[mid];
    //         break;
    //     } else {
    //         ans = ((mergedArr[mid] + mergedArr[mid + 1]) / 2)
    //         break
    //     }


    // }

    // return ans;

    let merged = [];
    let p1 = 0, p2 = 0;

    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] <= nums2[p2]) {
            merged.push(nums1[p1++]);
        } else {
            merged.push(nums2[p2++]);
        }
    }
    while (p1 < nums1.length) merged.push(nums1[p1++]);
    while (p2 < nums2.length) merged.push(nums2[p2++]);

    // Direct O(1) index lookup - no search needed
    const mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 1) {
        return merged[mid];
    }
    return (merged[mid - 1] + merged[mid]) / 2;

};
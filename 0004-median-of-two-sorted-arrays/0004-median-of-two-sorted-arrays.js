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

    // Approach 2 -> two pointers

    let mergedArr = [];
    let m = nums1.length;
    let n = nums2.length;
    let p1 = 0, p2 = 0;

    while (p1 < m && p2 < n) {
        if (nums1[p1] <= nums2[p2]) {
            mergedArr.push(nums1[p1]);
            p1++;
        } else {
            mergedArr.push(nums2[p2]);
            p2++;
        }
    }
    while (p1 < m) {
        mergedArr.push(nums1[p1]);
        p1++;
    }
    while (p2 < n) {
        mergedArr.push(nums2[p2]);
        p2++;
    }

    // Direct O(1) index lookup - no search needed
    const mid = Math.floor(mergedArr.length / 2);
    if (mergedArr.length % 2 === 1) {
        return mergedArr[mid];
    }
    return (mergedArr[mid - 1] + mergedArr[mid]) / 2;

};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;

    let mergedArr = [...nums1, ...nums2];
    mergedArr.sort((a, b) => a - b);

    let low = 0;
    let high = mergedArr.length - 1;
    let isEven = mergedArr.length % 2 === 0
    let ans = 0;
    console.log(mergedArr, 'debug')
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (!isEven) {
            ans = mergedArr[mid];
            break;
        } else {
            ans = ((mergedArr[mid] + mergedArr[mid + 1]) / 2)
            break
        }


    }

    return ans;

};
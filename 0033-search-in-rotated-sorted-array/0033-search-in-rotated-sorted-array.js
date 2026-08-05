/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
    // [4,5,6,7,0,1,2]
    // Approach 1 -> find min occurence and then target index value
    // let n = arr.length;
    // let low = 0;
    // let high = n - 1;

    // // first find minimum in this array
    // let min = -1;
    // while (low <= high) {
    //     let mid = low + Math.floor((high - low) / 2);
    //     if (arr[mid] === target) {
    //         return mid;
    //     }

    //     if (arr[mid] <= arr[n - 1]) {
    //         min = mid;
    //         high = mid - 1;
    //     } else {
    //         low = mid + 1;
    //     }

    // }

    // if (target >= arr[min] && target <= arr[n - 1]) {
    //     low = min;
    //     high = n - 1;
    // } else {
    //     low = 0;
    //     high = min - 1;
    // }

    // while (low <= high) {
    //     let mid = low + Math.floor((high - low) / 2);
    //     if (arr[mid] === target) {
    //         return mid;
    //     }
    //     if (arr[mid] < target) {
    //         low = mid + 1
    //     } else {
    //         high = mid - 1
    //     }
    // }

    // return -1;

    // Approach 2 -> 

    let n = arr.length;
    let low = 0;
    let high = n - 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        // [4,5,6,7,0,1,2]
        // part1 = [4,5,6,7]
        // part2 = [0,1,2]
        // target = 1

        if (arr[mid] > arr[n - 1]) {
            // if arr[mid] lies in part 1
            if (arr[mid] === target) {
                return mid;
            }
            if (arr[mid] > target) {
                // target can be lie in part1 < mid and greater than 0
                // or target can be anywhere in part2
                if (arr[0] > target) {
                    low = mid + 1; //move right
                } else {
                    high = mid - 1;
                }
            } else {
                low = mid + 1;
            }
        } else {
            // part 2 
            if (arr[mid] === target) {
                return mid;
            }

            if (arr[mid] > target) {
                high = mid - 1;
            } else {
                if (arr[n - 1] < target) {
                    high = mid - 1; //move left
                } else {
                    low = mid + 1;
                }
            }
        }
    }

    return -1
};
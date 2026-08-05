/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (arr, m, k) {
    // // Approach 1 -> by calculating flowers
    // // m bouquets
    // // k flowers in each bouquet
    // // total flowers n
    // // 
    // // invalid case
    // let totalFlowersReq = m * k
    // if (arr.length < totalFlowersReq) return -1;

    // // bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3

    // // low = 7;
    // // high = 12;
    // // mid = 12
    // // 1 + 1 + 1 + 1 + 1 + 1 + 1
    // let low = Math.min(...arr);
    // let high = Math.max(...arr);

    // const calculateFlowers = (days) => {
    //     let sum = 0;
    //     let ans = 0;
    //     for (let i = 0; i < arr.length; i++) {
    //         if (days >= arr[i]) {
    //             sum = sum + 1;
    //             if (sum % k === 0) {
    //                 ans = ans + sum;
    //                 sum = 0;
    //             }
    //         } else {
    //             sum = 0;
    //         }
    //     }
    //     console.log(ans, "ans")
    //     return ans;
    // }

    // // let flowers = calculateFlowers(9);
    // let result = high;

    // while (low <= high) {
    //     let mid = low + Math.floor((high - low) / 2);
    //     let flowers = calculateFlowers(mid);
    //     if (flowers >= totalFlowersReq) {
    //         high = mid - 1;
    //         result = Math.min(result, mid)
    //     } else {
    //         low = mid + 1;
    //     }
    // }
    // return result

    // Approach 2 -> by calculating bouquets

    // invalid case
    let totalFlowersReq = m * k
    if (arr.length < totalFlowersReq) return -1;

    // bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3

    // low = 7;
    // high = 12;
    // mid = 12
    // 1 + 1 + 1 + 1 + 1 + 1 + 1
    let low = Math.min(...arr);
    let high = Math.max(...arr);

    const calculateBouquets = (days) => {
        let flowers = 0;
        let bouquet = 0;

        for (let i = 0; i < arr.length; i++) {
            if (days >= arr[i]) {
                flowers++;

                if (flowers === k) {
                    bouquet++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
        }

        return bouquet;
    }

    // let flowers = calculateFlowers(9);
    let result = high;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let bouquets = calculateBouquets(mid);
        if (bouquets >= m) {
            high = mid - 1;
            result = Math.min(result, mid)
        } else {
            low = mid + 1;
        }
    }
    return result

};
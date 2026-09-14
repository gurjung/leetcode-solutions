/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
    let xAxisRange1 = [rec1[0], rec1[2]]; // [0,2]
    let yAxisRange1 = [rec1[1], rec1[3]]; // [0,2]

    let xAxisRange2 = [rec2[0], rec2[2]]; // [1,3] 
    let yAxisRange2 = [rec2[1], rec2[3]]; // [1,3]

    let start1 = Math.max(xAxisRange1[0], xAxisRange2[0]);
    let end1 = Math.min(xAxisRange1[1], xAxisRange2[1]);

    let start2 = Math.max(yAxisRange1[0], yAxisRange2[0]);
    let end2 = Math.min(yAxisRange1[1], yAxisRange2[1]);

    let commonX = end1 - start1;
    let commonY = end2 - start2;

    return commonX > 0 && commonY > 0
};
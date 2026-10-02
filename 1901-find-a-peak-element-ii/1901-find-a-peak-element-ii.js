/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
    let m = mat.length;
    let n = mat[0].length;

    let low = 0;
    let high = m - 1;

    // mid = 0 + 4 => 4

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        // find maximum in either each row or column;
        // if found maxCol -> then check only top and bottom here mid act as row
        // if found maxRow -> then check only left and right here mid act as column
        let maxCol = 0;

        for (let c = 1; c < n; c++) {
            if (mat[mid][maxCol] < mat[mid][c]) {
                maxCol = c
            }
        }

        // top
        let top = mid > 0 ? mat[mid - 1][maxCol] : -1;

        // bottom
        let bottom = mid < m - 1 ? mat[mid + 1][maxCol] : -1;

        let val = mat[mid][maxCol];

        if (val > top && val > bottom) {
            return [mid, maxCol]
        }
        if (top > val) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return [-1, -1];
};
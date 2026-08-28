/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    // dx = x2 - x1 
    // dy = y2 - y1
    // slope1 = dy / dx
    // dx_ = x3 - x1;
    // dy_ = y3 - y1;
    // slope2 = dy_ / dx_

    let result = 0;

    if (points.length <= 2) return points.length

    for (let i = 0; i < points.length; i++) {
        let map = new Map();
        for (let j = i + 1; j < points.length; j++) {
            let dx = points[j][0] - points[i][0];
            let dy = points[j][1] - points[i][1];
            let slope;
            if (dx === 0) {
                slope = "infinity"
            } else {
                slope = dy / dx;
            }

            if (map.has(slope)) {
                let val = map.get(slope);
                map.set(slope, val + 1)
            } else {
                map.set(slope, 1)
            }

            result = Math.max(result, map.get(slope) + 1)
        }
    }
    return result;
};
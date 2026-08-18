/**
 * @param {number[][]} heights
 * @return {number}
 */

class MinHeapOwn {
    constructor() {
        this.heap = [];
    }
    // get left child
    getLeftChildIndex(i) {
        return (2 * i) + 1;
    }

    // get right child

    getRightChildIndex(i) {
        return (2 * i) + 2;
    }

    // get Parent Child
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    insert(val) {
        this.heap.push(val);
        let lastIdx = this.heap.length - 1;
        this.heapifyUp(lastIdx)
    }

    heapifyUp(i) {
        while (i > 0) {
            let p = this.getParentIndex(i);
            if (this.heap[p].distance <= this.heap[i].distance) {
                break;
            } else {
                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]
                i = p;
            }
        }
    }

    extract() {
        if (this.heap.length < 1) return null;
        let min = this.heap[0];
        let lastIdx = this.heap.length - 1;
        [this.heap[0], this.heap[lastIdx]] = [this.heap[lastIdx], this.heap[0]]
        this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(i) {
        let smallest = i;
        let left = this.getLeftChildIndex(i);
        let right = this.getRightChildIndex(i);
        let n = this.heap.length;

        if (left < n && this.heap[left].distance < this.heap[smallest].distance) {
            smallest = left;
        }

        if (right < n && this.heap[right].distance < this.heap[smallest].distance) {
            smallest = right;
        }

        if (smallest !== i) {
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
            this.heapifyDown(smallest)
        }
    }

    size() {
        return this.heap.length;
    }
}

var minimumEffortPath = function (heights) {
    let m = heights.length;
    let n = heights[0].length;

    let minHeap = new MinHeapOwn();

    minHeap.insert({ distance: 0, r: 0, c: 0 });

    // 2d distance array 
    let distArr = [];

    for (let i = 0; i < m; i++) {
        distArr[i] = [];
        for (let j = 0; j < n; j++) {
            distArr[i][j] = Infinity;
        }
    }

    distArr[0][0] = 0; // distance src to src is 0

    let dx = [1, -1, 0, 0];
    let dy = [0, 0, -1, 1];

    function isValid(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return false;
        }
        return true;
    }

    while (minHeap.size() > 0) {
        let { distance, r, c } = minHeap.extract();
        for (let k = 0; k < 4; k++) {
            let row = r + dx[k];
            let col = c + dy[k];

            if (isValid(row, col)) {
                // find abs diff
                let srcVal = heights[r][c];
                let neighborVal = heights[row][col];
                let absDiff = Math.abs(srcVal - neighborVal);
                let newDist = Math.max(distance, absDiff);
                if (newDist < distArr[row][col]) {
                    distArr[row][col] = newDist;
                    minHeap.insert({
                        distance: newDist,
                        r: row,
                        c: col
                    })
                }
            }
        }

    }

    return distArr[m - 1][n - 1]
};
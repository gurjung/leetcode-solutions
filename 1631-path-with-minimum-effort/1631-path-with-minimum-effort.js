/**
 * @param {number[][]} heights
 * @return {number}
 */


class MinHeapOwn {
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    insert(val) {
        this.heap.push(val);
        let lastIndex = this.heap.length - 1;
        this.heapifyUp(lastIndex);
    }

    heapifyUp(i) {
        while (i > 0) {
            let p = this.getParentIndex(i);
            if (this.heap[p].dist <= this.heap[i].dist) {
                break;
            } else {
                // swap
                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
                i = p;
            }
        }
    }

    extract() {
        if (this.heap.length < 1) return null;
        let min = this.heap[0];
        let lastIdx = this.heap.length - 1;
        // swap first with last element
        // [a, b] = [b, a]
        [this.heap[0], this.heap[lastIdx]] = [this.heap[lastIdx], this.heap[0]];

        this.heap.pop();
        if (this.heap.length > 0) {
            this.heapifyDown(0);
        }
        return min;
    }

    peek() {
        if (this.heap.length) {
            return this.heap[0];
        } else {
            return null;
        }
    }

    heapifyDown(i) {
        let smallest = i;
        let left = this.getLeftChildIndex(i);
        let right = this.getRightChildIndex(i);
        let n = this.heap.length;

        // check smallest and left and find new Smallest
        if (left < n && this.heap[left].dist < this.heap[smallest].dist) {
            smallest = left;
        }

        if (right < n && this.heap[right].dist < this.heap[smallest].dist) {
            smallest = right;
        }

        // [a, b] = [b, a]
        if (smallest !== i) {
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
            this.heapifyDown(smallest);
        }
    }

    size() {
        return this.heap.length;
    }
}


var minimumEffortPath = function (heights) {
    // Dijktra's algo

    let m = heights.length;
    let n = heights[0].length;

    let distArr = [];

    for (let i = 0; i < m; i++) {
        distArr[i] = [];
        for (let j = 0; j < n; j++) {
            distArr[i][j] = Infinity;
        }
    }

    distArr[0][0] = 0;

    let dx = [1, -1, 0, 0];
    let dy = [0, 0, -1, 1];

    function isValid(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return false;
        }
        return true;
    }


    let minHeap = new MinHeapOwn();

    minHeap.insert({
        r: 0,
        c: 0,
        dist: 0
    })

    while (minHeap.size()) {
        let curr = minHeap.extract();
        let { r, c, dist } = curr;

        // explore all 4 neighbors of r and c
        for (let k = 0; k < 4; k++) {
            let row = r + dx[k];
            let col = c + dy[k];

            if (isValid(row, col)) {
                // abs diff
                let srcVal = heights[r][c];
                let neighborVal = heights[row][col];
                let absDiff = Math.abs(srcVal - neighborVal);
                let newDist = Math.max(absDiff, dist);
                if (newDist < distArr[row][col]) {
                    distArr[row][col] = newDist;
                    minHeap.insert({
                        r: row,
                        c: col,
                        dist: newDist
                    })
                }
            }
        }

    }

    return distArr[m - 1][n - 1]
};
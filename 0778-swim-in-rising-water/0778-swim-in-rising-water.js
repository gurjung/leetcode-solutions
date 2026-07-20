/**
 * @param {number[][]} grid
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
            if (this.heap[p].val <= this.heap[i].val) {
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
        if (left < n && this.heap[left].val < this.heap[smallest].val) {
            smallest = left;
        }

        if (right < n && this.heap[right].val < this.heap[smallest].val) {
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

var swimInWater = function (grid) {
    // dijkstra algo

    let m = grid.length;
    let n = grid[0].length;

    let timeArr = [];

    for (let i = 0; i < m; i++) {
        timeArr[i] = [];
        for (let j = 0; j < n; j++) {
            timeArr[i][j] = Infinity
        }
    }

    timeArr[0][0] = grid[0][0];

    let dx = [1, -1, 0, 0];
    let dy = [0, 0, -1, 1];

    function isValid(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return false
        }
        return true;
    }

    const minHeap = new MinHeapOwn();

    minHeap.insert({
        val: grid[0][0],
        r: 0,
        c: 0
    })

    while (minHeap.size() > 0) {
        let { val, r, c } = minHeap.extract();

        if (val > timeArr[r][c]) continue;

        // if (r === m - 1 && c === n - 1) {
        //     return val;
        // }

        for (let k = 0; k < 4; k++) {
            // explore all directions
            let row = r + dx[k];
            let col = c + dy[k];
            if (isValid(row, col)) {

                let newTime = Math.max(val, grid[row][col]);

                if (newTime < timeArr[row][col]) {
                    timeArr[row][col] = newTime;
                    minHeap.insert({
                        val: newTime,
                        r: row,
                        c: col
                    });
                }
            }
        }
    }

    return timeArr[m - 1][n - 1]

};
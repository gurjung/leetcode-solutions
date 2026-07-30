/**
 * @param {number[][]} points
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
            if (this.heap[p].weight <= this.heap[i].weight) {
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
        if (left < n && this.heap[left].weight < this.heap[smallest].weight) {
            smallest = left;
        }

        if (right < n && this.heap[right].weight < this.heap[smallest].weight) {
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

var minCostConnectPoints = function (points) {
    // Prim's Algo to find MST

    // in this question edge weight is not given to us, will calc on the go
    let V = points.length;

    let minHeap = new MinHeapOwn();
    let visitedArr = new Array(V).fill(false);

    minHeap.insert({
        weight: 0,
        node: 0
    })

    let sum = 0;

    while (minHeap.size() > 0) {
        let curr = minHeap.extract();
        let currNode = curr.node;
        let currWeight = curr.weight;
        if (!visitedArr[currNode]) {
            visitedArr[currNode] = true;
            sum = sum + currWeight;
            for (let n = 0; n < V; n++) {
                if (!visitedArr[n]) {
                    let x1 = points[currNode][0];
                    let x2 = points[n][0];
                    let y1 = points[currNode][1];
                    let y2 = points[n][1];
                    let edgeWeight = Math.abs(x2 - x1) + Math.abs(y2 - y1);
                    minHeap.insert({
                        weight: edgeWeight,
                        node: n
                    })
                }

            }
        }
    }

    return sum

};
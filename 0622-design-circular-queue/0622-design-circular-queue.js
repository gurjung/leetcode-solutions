/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.arr = new Array(k);
    this.capacity = k;
    this.front = 0;
    this.rear = k - 1;
    this.size = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) return false;

    let idx = (this.rear + 1) % this.capacity;

    this.arr[idx] = value;
    this.rear = idx;
    this.size++;

    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) return false;

    let idx = (this.front + 1) % this.capacity;
    this.front = idx;
    this.size--;

    // Optional: reset pointers when the queue becomes empty
    if (this.size === 0) {
        this.front = 0;
        this.rear = this.capacity - 1;
    }

    return true;

};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty()) return -1;
    return this.arr[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) return -1;
    return this.arr[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.size === this.capacity;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
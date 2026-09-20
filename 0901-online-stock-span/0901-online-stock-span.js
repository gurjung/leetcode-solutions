
var StockSpanner = function () {
    this.stack = []; // [price, index]
    this.pge = [];
    this.index = 0;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    let currIndex = this.index;

    while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
        this.stack.pop();
    }
    if (this.stack.length) {
        this.pge[currIndex] = this.stack[this.stack.length - 1][1]
    } else {
        this.pge[currIndex] = -1
    }

    this.stack.push([price, currIndex]);
    this.index++;

    let span = currIndex - this.pge[currIndex];
    return span;
};

// prices = [100, 80,]
// stack = [0, 1, 2, 4, 5]

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
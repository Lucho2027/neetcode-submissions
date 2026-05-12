class MinStack {
    constructor() {
        this.stack = new Array()
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack = this.stack.splice(0, this.stack.length -1)
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        const copy = [...this.stack]
        const result = copy.sort((a, b) => a - b)[0] 
        return result
    }
}

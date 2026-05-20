class MyDeque {
    constructor() {
        this.queue = []
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return !this.queue.length
    }

    /**
     * @param {number} value
     */
    append(value) {
        this.queue.push(value)
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        this.queue.unshift(value)
    }

    /**
     * @return {void}
     */
    pop() {
        return this.queue.length ? this.queue.pop() : -1
    }

    /**
     * @return {number}
     */
    popleft() {
        const toReturn = this.queue[0] ?? -1 
        
        this.queue = this.queue.slice(1)
        return toReturn
    }
}

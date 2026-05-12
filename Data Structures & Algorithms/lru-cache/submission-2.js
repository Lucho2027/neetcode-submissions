class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let val = null;
        if(this.cache.has(key)){
            val = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, val)
        }
            return val ?? -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
    
        if(this.cache.has(key)){
            this.cache.delete(key)
            this.cache.set(key, value)
        } else {
            this.cache.set(key,value)
            if(this.cache.size > this.capacity){
                this.cache.delete(this.cache.entries().next().value[0])
            }
            
        }
    }
}

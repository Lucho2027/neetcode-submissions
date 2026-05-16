class Node{
    constructor(val = null, next = null){
        this.value = val;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let count = 0;
        if(this.head === null) return -1;
        if(index < 0) return -1
        let curNode = this.head
        while (count <= index){
            if(curNode.next === null && index !== count){
                return -1
            } if( index  === count ){
                return curNode.value
            }
            curNode = curNode.next
            count++
        }  
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
            let newHead = new Node(val, this.head)
            if(this.head === null){
                this.head = newHead
                this.tail = newHead
            } else {
                this.head = newHead
            }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) { 
        let newTail = new Node(val, null) 

        if(this.head === null){
            this.head = newTail
            this.tail = newTail
        } else {
            this.tail.next = newTail
            this.tail = newTail
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let count = 0;
        if(this.head === null) return false;
        if(index < 0) return false
        let curNode = this.head
        let prevNode = null
        if(index === 0){
            this.head = curNode.next
            if(this.head === null){
                this.tail = null
            }
            return true
        }
        while (count <= index){
            if(curNode.next === null && index !== count){
                return false
            } if( index  === count ){
                prevNode.next = curNode.next
                if(prevNode.next === null){
                    this.tail = prevNode
                }
                return true
            }
            prevNode = curNode
            curNode = curNode.next
            count++
           
        } 
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const resp = []
        let curNode = this.head
        if(curNode){
        while(curNode.next !== null){
            resp.push(curNode.value)
            curNode = curNode.next
        }
        }
        const addValue = curNode && curNode.value ? curNode.value : []
        resp.push(addValue)
        return resp
    }
}

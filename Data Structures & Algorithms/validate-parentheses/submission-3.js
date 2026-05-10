class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const iterArr = s.split('')
        const dir = {
            '[':']',
            '(':')',
            '{':'}'
        }
        for (const br of iterArr){
            if(Object.keys(dir).includes(br)){
                stack.push(br)
            } else if(Object.values(dir).includes(br)) { 
                const lastOnStack = stack.pop()
                if (br !== dir[lastOnStack]) return false
            }
        }
        return stack.length > 0 ? false : true
    }
}


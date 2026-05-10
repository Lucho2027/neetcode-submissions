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
        const openingArr = Object.keys(dir)
        const closingArr = Object.values(dir)
        for (const br of iterArr){
            if(openingArr.includes(br)){
                stack.push(br)
            } else if(closingArr.includes(br)) { 
                const lastOnStack = stack.pop()
                if (br !== dir[lastOnStack]) return false
            }
        }
        return stack.length > 0 ? false : true
    }
}


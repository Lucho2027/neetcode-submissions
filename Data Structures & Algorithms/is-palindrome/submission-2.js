class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const sAsAnArr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('')

        const reversed = [...sAsAnArr].reverse().join()
        const normal = [...sAsAnArr].join()
        if(sAsAnArr.length === 1) return true
        return  normal === reversed
    }
}

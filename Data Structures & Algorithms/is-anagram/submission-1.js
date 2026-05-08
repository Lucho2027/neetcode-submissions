class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      
        if(s.length !== t.length) return false;
        const sortS= s.split('').sort().join('');
        const sortT = t.split('').sort().join('');
        console.log(sortS, sortT) 
        
        return sortS === sortT
       
    }
}

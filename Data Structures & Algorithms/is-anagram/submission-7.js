class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      
        // if(s.length !== t.length) return false;
        // const sortS= s.split('').sort().join('');
        // const sortT = t.split('').sort().join('');
        // console.log(sortS, sortT) 
        
        // return sortS === sortT

		const sMap = new Map();
		const tMap = new Map();
		if (s.length !== t.length) return false
		for (let i = 0; i < s.length; i++){
			const curVal = s[i];
			sMap.set(curVal, (sMap.get(curVal) || 0) + 1);
		}
		for (let j = 0; j < t.length; j++){
			const jVal = t[j];
			tMap.set(jVal, (tMap.get(jVal) || 0) + 1);
		}
		
		let result = true
		sMap.forEach((v, k) => {
			const testVal = tMap.get(k)
			 if (testVal !== v || (testVal === undefined && !tMap.has(k))) {
            	result =  false;
         }
		})

		return result
    }
}

class Solution {
	// lets use our previously isAnagram function to use to our advantage here.
 isAnagram(s, t) {
		if (s.length !== t.length) return false;

		const sMap = new Map()
		const tMap = new Map()

		for(let i = 0; i < s.length; i++){
			const curVal = s[i]
			sMap.set(curVal, (sMap.get(curVal) || 0) + 1)
		}

		for(let j = 0; j < t.length; j++){
			const curVal2 = t[j]
			tMap.set(curVal2, (tMap.get(curVal2) || 0) +1)
		}

		let result = true
		sMap.forEach((v, k) => {
			const testVal = tMap.get(k)
			if(testVal !== v || (testVal === undefined && !tMap.has(k))){
				result = false
			}
		})
		return result
	}
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
		const mapOfWords = new Map()
		const finalArr = [];
		
		for (let i = 0 ; i < strs.length; i++){
				const str1 = strs[i]
			mapOfWords.set(str1, [])		
		}
		mapOfWords.forEach((v, k) => {
			strs.forEach((v1, k1) => {
				if(this.isAnagram(k, v1)){		 
					const addToArr = mapOfWords.get(k)
					mapOfWords.set(k, [...addToArr, v1])
				}
			
				
			})
		})
		const mom =[]
		mapOfWords.values().forEach((v) => {
			const string = v.join('')
			if(!mom.includes(string)){
				mom.push(string)
				finalArr.push(v)
			}
		})
		console.log(finalArr)
		return finalArr
    }
	
}

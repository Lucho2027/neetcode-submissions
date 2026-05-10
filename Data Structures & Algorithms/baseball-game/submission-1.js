class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const record = []
        let totalScore = 0
        for(let i = 0; i < operations.length; i++){
            const incOp = operations[i]
            if(!isNaN(Number(incOp))){
                record.push(Number(incOp))
                totalScore += Number(incOp)
            } 
            if(incOp === '+') {
                const scoreSumofPrevious2Scores = (record[record.length - 1] || 0) + (record[record.length - 2] || 0)
                totalScore += scoreSumofPrevious2Scores
                record.push(scoreSumofPrevious2Scores)
            }
            if(incOp === 'D'){
               const scoreDoubleofPrevScore = (record[record.length - 1] || 0 ) * 2 
               totalScore += scoreDoubleofPrevScore
               record.push(scoreDoubleofPrevScore)
            }
            if(incOp === 'C'){                
                totalScore -= record.pop()
      
            }
        }
        return totalScore
       
    }

}

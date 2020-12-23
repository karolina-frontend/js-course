// students score, total possible score
// 15/20 -> You got a C (75%)!
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = function(studentScore, totalScore = 100) {
    const cdpercent = studentScore/totalScore*100
    let letterGrade = ''
    if(percent<=59) {
        letterGrade = 'F'   
    }
    else if(percent<=69) {
        letterGrade = 'D'
    }
    else if(percent<=79 ) {
        letterGrade = 'C'
    }
    else if(percent<=89 ) {
        letterGrade = 'B'
    }
    else if(percent<=100) {
        letterGrade = 'A'
    }
    return `You got ${letterGrade} (${percent}%)`
}

const score = gradeCalc(95,100)
console.log(score)
// Multiple arguments
let add = function(a, b, c) {
    return a + b + c
}
let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'anonymous', score = 0) {
    return `Player: ${name}, score: ${score}`
   // return 'Player: '+name +', score: '+score 
 
}

let scoreText = getScoreText(undefined, 50)
console.log(scoreText)

//Challenge area
//total, tipPercent .2

let restaurantAccount = function(price, tipPercent = .2) {
 
    return `${tipPercent*100}% tip from $${price} would $${price*tipPercent}. Total price with tip: $${price + price*tipPercent}`
    //return 'Total price with tip: '+ (price + price*tipPercent)
}

let total = restaurantAccount(200, 0.25)
console.log(total)

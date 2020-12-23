let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max-min + 1)) + min
console.log(randomNum)

// Challenge area

let makeGuess = function (number) {
    let minimum = 1
    let maximum = 5
    let randomNumber = Math.floor(Math.random() * (maximum-minimum + 1))+ minimum
    console.log(`number is ${randomNumber}`)
    return number === randomNumber
}

console.log(makeGuess(1))

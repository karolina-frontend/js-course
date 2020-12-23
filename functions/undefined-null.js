//Undefined for variable
let name 

name = 'Pawel'
if (name === undefined){
    console.log('Please provide the name')
} else {
    console.log(name)
}

// Undefined for function arguments
let square = function(num) {
    console.log(num)
}

let results = square()
console.log(results)

// null as assigned value
let age = 23
age = null
console.log(age)
let myBook = {
    title: 'Harry Potter and Goblet of Fire', 
    author: 'J.K.Rowling',
    pageCount: 876
}

let otherBook = {
    title: 'Ostatnie życzenie', 
    author: 'Andrzej Sapkowski',
    pageCount: 692
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}.`,
        pageCountSummary: ` ${book.title} is ${book.pageCount}.`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.summary, bookSummary.pageCountSummary)

//Challenge area
// Create function - take fahrenheuit in - return objects with all three


let tempCalc = function(fahrenheit) {
    return {    
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) *5/9 ,
        kelvin: (fahrenheit + 459.67) *5/9
    }
}

let calculationSummary = tempCalc(50)
console.log(calculationSummary)
console.log(calculationSummary.fahrenheit, calculationSummary.celsius, calculationSummary.kelvin)

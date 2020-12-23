let myBook = {
    title: 'Harry Potter and Goblet of Fire', 
    author: 'J.K.Rowling',
    pageCount: 876

}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Harry Potter and Chamber of Secret'
console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area
// name, age, location 

let person = {
    name: 'Karolina',
    age: 23,
    location: 'Wroclaw, Poland'
}
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)

person.age = person.age + 1
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)


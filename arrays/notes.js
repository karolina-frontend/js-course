const notes = [{
    title: 'My next trip',
    body: 'I would like to go to New Zeland'
},{
    title: 'Habbits to work on',
    body: 'Excercise, eating better'
},{
    title: 'Office notifications',
    body: 'Get new seat'
}]

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('Very first notes')

//notes.splice(1, 1, 'This new notes')

// notes[2] = 'This is new note 3'


// notes.forEach(function(item, index) {
//     console.log(index)
//     console.log(item)
// })

console.log(notes.length)
console.log(notes)

// Counting... 1
// for (let num =0; num <=2; num++) {
//     console.log(num)
// }

// for(let count = notes.length-1; count >= 0; count--) {
//     console.log(notes[count])
// } 
// Objects are only equal to other objects
const index = notes.findIndex(function(note,index) {
    console.log(note)
    return note.title === 'Habbits to work on'
})
console.log(index)
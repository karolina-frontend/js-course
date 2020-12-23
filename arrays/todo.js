
const todos = ['Eat breakfast', 'Do your makeup', 'Go to work', 'Go for lunch', 'Have some fun']

todos.splice(2,1)
todos.push('new last element')
todos.shift()


console.log(`You have ${todos.length} things to do.`)


todos.forEach(function(todo, index){
    console.log(`${index+1}. ${todo}`)
})

console.log(`You have ${todos.length} things to do.`)

for(let todo =0; todo < todos.length;todo++) {
    console.log(`${todo+1}. ${todos[todo]}`)
}


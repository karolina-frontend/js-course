let name = ' Karolina Brucha '

//Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
//let password = 'abc123random098'
//console.log(password.includes('password'))

// Trin method
console.log(name.trim())

// Challenge area

let isValidPassword = function(password) {
   // if (password.includes('password')) {
     //   return false
    //}
    //return password.length > 8
    return password.length > 8 && !password.includes('password')
}
         
 console.log(isValidPassword('1234gd'))   
 console.log(isValidPassword('1234password')) 
 console.log(isValidPassword('1234jkuedmckmjkehkb')) 

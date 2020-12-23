let temp = 70

if( temp <= 60 || temp >= 90) {
   // console.log('Its is ok')
}

//Challenge area

let isGuestOneVegan = false
let isGuestTwoVegan = true

if ( isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer vegan menu')
}
else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer some vegan options')
}
else {
    console.log('Dont offer any vegan menu')
}
//Function - input{argument}, code, output{return value}

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser();
greetUser();
greetUser();

let square = function(num) {
    let result = num * num;
    return result
}

let value = square(3);
let otherValue = square(10)
console.log(value +'    '+otherValue)

//challenge area
let convertFahrenhaitToCelsius = function(temp) {
    let celsius = (temp - 32) *5/9
    return celsius
}
let temperature = convertFahrenhaitToCelsius(32)
let otherTemperature = convertFahrenhaitToCelsius(68)
console.log(temperature + '   '+ otherTemperature)
//convert fahrenheit to celsius

//Call a couple of times (32 -> 0) ( 68 -> 20)
//print converted values
//Globa Scope (convertFahrenheitToCelsius, temperature, otherTemperature)
    // Local scope (temp, celsius)
        //Local scope (isFreezing)
let convertFahrenhaitToCelsius = function(temp) {
    let celsius = (temp - 32) *5/9

    if (celsius <= 0) {
        let isFreezing = true
    }
    return celsius
}
let temperature = convertFahrenhaitToCelsius(32)
let otherTemperature = convertFahrenhaitToCelsius(68)
console.log(temperature + '   '+ otherTemperature)
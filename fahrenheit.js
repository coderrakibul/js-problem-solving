function fahrenheitCal(celsius){
    var celsiusToFahrenheit = (celsius * 9/5) + 32;
    return celsiusToFahrenheit;
}

var input = fahrenheitCal(5);
console.log(input);
function celsiusCal(fahrenheit){
    var fahrenheitToCelcius = (fahrenheit -32) * 5/9;
    return fahrenheitToCelcius;
}

var input = celsiusCal(50);
console.log(input);
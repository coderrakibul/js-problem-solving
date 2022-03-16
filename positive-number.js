function checkPositive(numbers){
    var imagineNumber = 0;
    var positiveNumbers = [];
    for(var i = 0; i < numbers.length; i++){
        var number = numbers[i];
        if(number >= imagineNumber){
           positiveNumbers.push(number);
        }
        else if(number < imagineNumber){
            break;
        }
    }
    return positiveNumbers;
}
var numberList = [41, 52, 47, 49, -14, -50, 90];
var result = checkPositive(numberList);
console.log(result);
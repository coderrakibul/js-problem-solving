function largesNumber(numbers){
    var largest = numbers[0];
    for(var i = 0; i < numbers.length; i++){
       var number = numbers[i];
        if(number > largest){
            largest = number;
        }
    }
    return largest;
}


var numberList = [9, 2, 5, 7, 10 , 14, 25, 15, 8, 20, 17];
var result = largesNumber(numberList);
console.log(result);
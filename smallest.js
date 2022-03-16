function smallestNumber(numbers){
    var smallest = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        var number = numbers[i];
       if(number < smallest){
           smallest = number;
       }
    }
    return(smallest);
}

var numberList = [14, 12, 45, 15, 8, 3, 17, 71, 5, 70, 22];
var small = smallestNumber(numberList);
console.log(small);

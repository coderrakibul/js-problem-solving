function largerNumber(numbers){
    var largers = 80;
    var count = [];
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i]
        if(element > largers){
            count.push(element);
        }
    }
    return count;
}

var numbersList = [78, 98, 81, 85, 65, 90, 85, 96, 87, 84];
var result = largerNumber(numbersList);
console.log(result);
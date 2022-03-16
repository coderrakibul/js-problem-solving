function secondLargestNumberFind(numbers){
    var largest = numbers[0];
    var secondLargest = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        if(element > largest){
            secondLargest = largest;
            largest = element;
        }
        else if(element > secondLargest){
            secondLargest = element;
        }
    }
    return secondLargest;
}
numberList = [12, 15, 45, 31, 47, 74, 27, 57, 86, 80, 83 ];
var result = secondLargestNumberFind(numberList);
console.log(result);
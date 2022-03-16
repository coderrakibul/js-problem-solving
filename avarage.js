function avarageCal(numbers){
    var total = 0;
    for(var i = 0; i < numbers.length; i++){
        var number = numbers[i];
        total = total + number;
    }

    var avarage = total / i;
    return avarage;
}

var myNumberList = [ 20, 20, 15, 30, 25, 40];
var result = avarageCal(myNumberList);
console.log(result);
function isEven(age){
    if(age % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

var myAge = 23;
var result = isEven(myAge);
console.log(result);
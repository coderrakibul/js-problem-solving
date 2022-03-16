function leapYear(year){
    if(year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}

var thisYear = 2023;
var result = leapYear(thisYear);
console.log(result);
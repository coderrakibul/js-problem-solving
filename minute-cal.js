function hourToMinute (hour){
    var minute = hour * 60;
    return minute;
}

var totalHours = 5;
var result = hourToMinute(totalHours);
console.log(result);